build()

let links = {
    github: 'https://github.com/OmarAlashqar',
    linkedin: 'https://www.linkedin.com/in/omaralashqar'
}

function build(){

    // Projects
    Util.getJSON('./includes/projects.json', projects => {
        projects.forEach(project => {
            Util.include('./includes/project-item.html', html => {
                let element = Util.template(html, {
                    '_name': project.name,
                    '_imgURL': project.imgURL,
                    '_alt': project.alt,
                    '_caption': project.caption,
                })

                $('.projects-wrapper').append(element)
                element.click(() => Util.redirect(project.projectURL, true))
            })
        })
    })

    // Spotlight
    Util.include('./includes/spotlight.html', html => {
        let element = Util.template(html, {
            '_github': links.github,
            '_linkedin': links.linkedin
        })

        $('.spotlight').append(element)
    })

    // About
    Util.include('./includes/about.html', html => {
        let element = Util.template(html, {

        })

        $('.about').append(element)
    })
}
