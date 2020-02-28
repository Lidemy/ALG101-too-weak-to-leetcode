import React from 'react'

/*
  workaround for fullscreen
*/
class Fullscreen extends React.Component {
    componentDidMount() {
        if (!window._lidemy_fullscreen) {
            window._lidemy_fullscreen = function(e) {
                if (e.altKey && e.keyCode === 70) {
                    const element = document.querySelector('body')

                    element.requestFullscreen =
                      element.requestFullscreen ||
                      element.mozRequestFullScreen ||
                      element.webkitRequestFullScreen

                    element.requestFullscreen()
                }
            }
        }
        window.removeEventListener('keydown', window._lidemy_fullscreen )
        window.addEventListener('keydown', window._lidemy_fullscreen )
    }

    render() {
        return <div />
    }
}

export default Fullscreen