import React, { Component } from 'react'

interface CarouselProps {
    images: string[]
}

export default class Carousel extends Component<CarouselProps> {
    state = {
        active: 0,
    }

    static defaultProps = {
        images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
    }

    handleIndexClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        this.setState({
            active: +(e.currentTarget.dataset.index ?? 0),
        })
    }

    render() {
        const { active } = this.state
        const { images } = this.props

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal hero" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        <img
                            onClick={this.handleIndexClick}
                            data-index={index}
                            key={photo}
                            src={photo}
                            className={index === active ? 'active' : ''}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        )
    }
}
