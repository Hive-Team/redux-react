import React, { Component, PropTypes } from 'react'
import { jq } from '../../../vendors/vendors'

const $ = jq();

class AppBody extends Component {

  componentDidMount() {
    const winW = $(window).width();
    let J_nav_win = $('#nav_win');
    let J_app_view = $('#app_view');
    let J_layer = $('#layer');

    J_nav_win.bind('click',function(){
      J_app_view.animate({
        marginLeft:-winW+50
      })

      J_layer.css('display','block').animate({
        opacity:0.4
      })
    })

    J_layer.bind('click',function(){
      J_app_view.animate({
        marginLeft:0
      })

      $(this).animate({
        opacity:0
      },function(){
        $(this).css('display','none')
      })
    })
  }

  render() {
    return (
      <div className='app-container'>
        <div className='relative-box page-unpd-view' id='app_view'>
          <header>
            <section className='title-box'>
              <i className='arrow-r-1'></i>
              <h1>标题</h1>
            </section>
            <section className='nav-win' id='nav_win'>
              <i className='arrow-r-1'></i>
            </section>
          </header>
          <footer>底部</footer>
          <div className='nav-container'>
            dfdfdf
          </div>
          <div className='layer-box' id='layer'></div>

          <div className='page-pd-view'>
            <div className='content-view'>
              <div className='scroll-view'>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AppBody.propTypes = {
}

export default AppBody
