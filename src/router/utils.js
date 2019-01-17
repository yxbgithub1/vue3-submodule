export const unionRoutes = context => {
    let children = []
    // context.keys().forEach(key => {
    //     let { routes, base } = context(key).default
    //     if (routes && routes.length) {
    //         children.push(...(routes.map(item => Object.assign(item, {
    //             path: `${base}${item.path}`,
    //             name: `${base}${item.path}`,
    //         }))))
    //     }
    // })
    context.keys().forEach(key => {
        let routes = context(key).default
        if (routes && routes.length) {
            children.push(...routes)
        }
    })

    return children
}