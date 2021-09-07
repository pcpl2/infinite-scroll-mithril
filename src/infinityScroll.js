import m from 'mithril';

function runRequest(vnode) {
  if(vnode.state.loading) {
    return
  }
  vnode.state.loading = true

  vnode.attrs.pageRequest(vnode.state.page).then((result) => {
    vnode.state.page = vnode.state.page + 1
    vnode.state.scrollElements = vnode.state.scrollElements.concat(result)
    vnode.state.loading = false
    if(result < (vnode.attrs.pageCount ? vnode.attrs.pageCount : 0)) {
      vnode.state.loadNext = false
    }
  })
}

const InfinityScroll = () => ({
  oninit(vnode) {
    vnode.state.sentinel = m("div#sentinel", {style: "width: 100%"}, vnode.attrs.loadingFooter ? vnode.attrs.loadingFooter : m("div", { style: "width: 1px;height: 1px;" }))
    vnode.state.scrollElements = []
    vnode.state.page = 0
    vnode.state.processPageData = (content) => { content.map((el) => el) }
    if(vnode.attrs.processPageData != undefined) {
      vnode.state.processPageData = vnode.attrs.processPageData;
    }
    vnode.state.loadNext = true

    const options = {
      root: null, //window by default
      rootMargin: '0px',
      threshold: 0
    }

    if(vnode.attrs.preload) {
      runRequest(vnode)
    }

    vnode.state.io = new IntersectionObserver(entries => {
      runRequest(vnode)
    }, options)
  },
  oncreate(vnode) {
    vnode.state.io.observe(document.querySelector('#sentinel'))
  },
  onbeforeremove(vnode) {
    vnode.state.io.unobserve(document.querySelector('#sentinel'))
  },
  view(vnode) {
    return [
      vnode.state.processPageData(vnode.state.scrollElements),
      vnode.state.loadNext ? vnode.state.sentinel : []
    ]
  }
})

export default InfinityScroll;
