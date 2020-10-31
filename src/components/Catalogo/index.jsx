import React from "react"
import catalogoStyles from "./catalogo.module.scss"
import thumb01 from "../../../images/Thumbnail01.png"
import thumb02 from "../../../images/Thumbnail02.png"
import thumb03 from "../../../images/Thumbnail03.png"

const Catalogo = (props) => {
  return (
    <div className={catalogoStyles.wrapper}>
      <h3>{props.children}</h3>
      <div
        class="grid-container"
        className={catalogoStyles.gridContainer}
        // data-sal="slide-up"
        // data-sal-delay="300"
        // data-sal-easing="ease"
      >
        <div
          class="thumb01"
          className={catalogoStyles.thumb01}
          className={catalogoStyles.hvrBounceIn}
        >
          <img src={thumb01}></img>
        </div>
        <div
          class="thumb02"
          className={catalogoStyles.thumb02}
          className={catalogoStyles.hvrBounceIn}
        >
          <img src={thumb02}></img>
        </div>
        <div
          class="thumb03"
          className={catalogoStyles.thumb03}
          className={catalogoStyles.hvrBounceIn}
        >
          <img src={thumb03}></img>
        </div>
        {/* <div class="thumb04" className={catalogoStyles.thumb04}>
          <img src={thumb01}></img>
        </div>
        <div class="thumb05" className={catalogoStyles.thumb05}>
          <img src={thumb02}></img>
        </div>
        <div class="thumb06" className={catalogoStyles.thumb06}>
          <img src={thumb03}></img>
        </div> */}
        {/* <div class="thumb07" className={catalogoStyles.thumb07}>
          <img src={thumb01}></img>
        </div>
        <div class="thumb08" className={catalogoStyles.thumb08}>
          <img src={thumb02}></img>
        </div>
        <div class="thumb09" className={catalogoStyles.thumb09}>
          <img src={thumb03}></img>
        </div>
        <div class="thumb10" className={catalogoStyles.thumb10}>
          <img src={thumb01}></img>
        </div>
        <div class="thumb11" className={catalogoStyles.thumb11}>
          <img src={thumb02}></img>
        </div>
        <div class="thumb12" className={catalogoStyles.thumb12}>
          <img src={thumb01}></img>
        </div> */}
      </div>
    </div>
  )
}

export default Catalogo
