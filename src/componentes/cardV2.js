import React from 'react'
import './card.css'
import imgRes from '../img/hires.png'
import imgMediafire from '../img/mediafire.png'
import imgMirror from '../img/mirror.png'
import imgZ from '../img/logo.png'
import imgG from '../img/download.jpg'

const CardV2 = props => {
    const { _id, title, artists, img, linksServer } = props.ele
    const artist = artists.reduce((pre, curr) => `${pre} | ${curr}`)

    if (props.ele !== undefined) {
        return (
            <div className="card" key={_id}>
                <div className="card-img">
                    <img src={img} loading="lazy" alt="" />
                </div>
                <div className="card-body">
                    <h5>{artist}</h5>
                    <p>{title}</p>
                    <div className="links">
                        {linksServer.map(e => {
                            /* const regex = /(^Drive|Zippyshare|mir.cr|mediafire|\[HI-RES 96\/24bits\]|\[HI-RES 48\/24bits\])/gi */
                            let { serverUrl, server } = e
                            let classCss = ''
                            let img = ''
                            if (server.match(/(\[HI-RES 96\/24bits\]|\[HI-RES 48\/24bits\]|\[FLAC WEB 24\/16bits\])/gi) !== null) {
                                classCss = 'hires'
                                img = imgRes
                            }
                            else if (server.match(/(mediafire)/gi) !== null) {
                                classCss = 'mediafire'
                                server = 'Mediafire'
                                img = imgMediafire
                            }
                            else if (server.match(/(mir.cr)/gi) !== null) {
                                classCss = 'mirrored'
                                server = 'Mirrored'
                                img = imgMirror
                            }
                            else if (server.match(/(Zippyshare)/gi) !== null){
                                classCss = 'zippy'
                                img = imgZ
                            }
                            else if (server.match(/(^Drive)/gi) !== null) {
                                classCss = 'drive'
                                img = imgG
                            }
                            if(img === ''){
                                return (
                                    <a className={classCss} href={serverUrl}>
                                        {server}
                                    </a>
                                )
                            }
                            else{
                                return (
                                    <a className={classCss} href={serverUrl}>
                                        <img src={img} alt="" />
                                        {server}
                                    </a>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return null
    }
}


export default CardV2
