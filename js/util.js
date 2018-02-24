Util = {
    getJSON: (url, callback) => {
        $.getJSON(url)
            .then(data => callback(data))
            .catch((jqxhr, status, err) => console.error('Error:', err))
    },

    include: (url, callback) => {
        $.get(url, data => callback(data))
    },

    template: (html, data) => {
        Object.keys(data).forEach(item => {
            html = html.replace(item, data[item])
        })

        return $(html)
    },

    redirect: (url, newTab) => {
        if (newTab) window.open(url, '_blank')
        else window.location = url
    }

}
