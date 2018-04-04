build()

var links = {
    resume: './resume.pdf',
    github: 'https://github.com/OmarAlashqar',
    linkedin: 'https://www.linkedin.com/in/omaralashqar'
}

function build() {
    // Intro
    Util.include('./includes/intro.html', function (html) {
        var element = Util.template(html, {
            '_resumeUrl': links.resume,
            '_githubUrl': links.github,
            '_linkedinUrl': links.linkedin
        })
        $('.intro').append(element)
    })

    // Projects
    Util.include('./includes/projects.html', function (html) {
        var element = Util.template(html, {})
        $('.projects').append(element)
    })
    Util.getJSON('./includes/projects.json', function (projects) {
        projects.forEach(function (project) {
            Util.include('./includes/project-card.html', function (html) {
                var element = Util.template(html, {
                    '_srcUrl': project.src,
                    '_alt': project.alt,
                    '_name': project.name,
                    '_caption': project.caption
                })
                $('.projects-deck').append(element)
                element.click(function () {
                    return Util.redirect(project.projectURL, true)
                })
            })
        })
    })
}
