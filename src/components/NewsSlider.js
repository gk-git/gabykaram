import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Ticker from "react-ticker"
import { CSSTransition, TransitionGroup } from "react-transition-group"

export default function NewsSlider ({ news }) {
  
  const [state, setState] = useState({
    activeItem: 0,
    didMove: 0,
    triggerOnResize: false
  })
  
  /*
   * onNext
   *
   * This function will be passed to "react-ticker" component to
   * allow the component to track the state of the slider
   *
   * In more basics words this function will run whenever a new item get ready to be
   * shown in the view.
   *
   * This function will run even for the 1st item that show on the view
   *
   * index value will vary from 0 to infinite
   *
   * The use of this.state.didMove is to track if the function had run on the first item or not
   * */
  const onNext = (index) => {
    let activeIndex = (index) % news.length
    
    if (state.didMove) {
      setState(prevState => ({
        ...prevState,
        activeIndex: activeIndex + 1
      }))
    } else {
      setState(prevState => ({
        ...prevState,
        didMove: true
      }))
    }
  }
  
  const { activeIndex, didMove } = state
  
  /*
   * This block is to get the active new available on the view
   *
   * First set the active news to undefined for the case where news is an empty array
   * */
  let activeNew = undefined
  if (news.length > 0) {
    activeNew = news[0]
    if (activeIndex !== undefined && didMove) {
      activeNew = news[state.activeIndex % news.length]
    }
    
    return (
      <div className="news-slider">
        <div className="news-slider__container">
          <div className="item">
            
            <div className="item__info">
              {
                activeNew !== undefined ? (
                  <>
                    <div>
                      <TransitionGroup>
                        <CSSTransition
                          key={activeNew.id}
                          timeout={1000}
                          classNames="news-out"
                        >
                          <div>
                            <p className="item__info__author">{activeNew.name}</p>
                            <span className="item__info__date">{activeNew.date}</span>
                          </div>
                        </CSSTransition>
                      </TransitionGroup>
                    </div>
                  </>
                ) : null
              }
            </div>
            
            <div className="item__content__wrapper">
              <Ticker
                offset="80%"
                move={true}
                speed={8}
                onNext={onNext}
                triggerOnResize={news.length > 0}
                direction={"toLeft"}
              >
                {(item) => {
                  const { id, content, url } = news[(item.index) % news.length]
                  return (
                    <>
                      <div className="item__content" key={id}>
                        <Link to={url}>{content}read more</Link>
                      </div>
                    </>
                  )
                }}
              </Ticker>
            </div>
          </div>
        </div>
      
      </div>
    )
  } else {
    return (
      <div className="news-slider">
        <span className="loading">Loading</span>
      </div>
    )
  }
}
NewsSlider.defaultProps = {
  news: []
}
NewsSlider.prototypes = {
  news: PropTypes.array
}
