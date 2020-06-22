import React, { Component } from 'react'

import ReactBnbGallery from 'react-bnb-gallery'

const photos = [{
  photo: "https://lh3.googleusercontent.com/m51nne7kZ3VqV1NOr-GavNfV6bY-XCHJGDufpO-sZirNgztLcDYE2346q2US5vdx8BWyDIfKGRWYN7CyRgmUJmoypdB4d25HGnffOGYGmFZis9uipqPwqthTtuJC65FDne5wqU6miFEEcmuDTIrFPOxSraAds0pUbnpc92Dhakewunm1-9cbKZiiOIc2mImASI4cmA_IufvHzFdiJoDLI7Z_RVFifcDjmcPvjD5izzp0J8pXoBh3zuvG_mgY9oCodOEbfRCfJ8tLytpXFQ_-d2Qn9ePVdrqLQWVqhYdh-p8QtoId3RTmLiFovpCydOZPVdwFjEmKl-NUI-sQrTf9uW6zFzvo_ezYmkWBFQwfcBn-rP79xWdPFbugsI4L1dWR4eVx34uk6p-h-44GejQLYj4MRGmzamflKugeKZC22MP9r8c3xVeGwZoJzQgBm6ww3iV8fGrm3ZwYUpfsFVMxVG1ZZ-dgUMpTM7h9kWGa8l977k8sDaWMOpLYV3jgZ0R3eklG0DjpKixEJH4ZIXU4wSFY8P2RBF9rHYntv7nlA-sd8gzS70H9w6f--VVf9A8MSYQ-spib_36NEXTrXFvPafmcid-xhukj0IkIzXuueMdVVPnk851C7eb7mwZarxXwPzLFQlc3NHA9EpL70u_d20px2uLbd-mPip1neNfjXDHjdvZ7vMdQLe4I7U5QJA=w2106-h1404-no?authuser=0",
  caption: "Viñales, Pinar del Río, Cuba",
  subcaption: "Photo by Simon Matzinger on Unsplash",
  thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
}, {
  photo: "https://lh3.googleusercontent.com/m51nne7kZ3VqV1NOr-GavNfV6bY-XCHJGDufpO-sZirNgztLcDYE2346q2US5vdx8BWyDIfKGRWYN7CyRgmUJmoypdB4d25HGnffOGYGmFZis9uipqPwqthTtuJC65FDne5wqU6miFEEcmuDTIrFPOxSraAds0pUbnpc92Dhakewunm1-9cbKZiiOIc2mImASI4cmA_IufvHzFdiJoDLI7Z_RVFifcDjmcPvjD5izzp0J8pXoBh3zuvG_mgY9oCodOEbfRCfJ8tLytpXFQ_-d2Qn9ePVdrqLQWVqhYdh-p8QtoId3RTmLiFovpCydOZPVdwFjEmKl-NUI-sQrTf9uW6zFzvo_ezYmkWBFQwfcBn-rP79xWdPFbugsI4L1dWR4eVx34uk6p-h-44GejQLYj4MRGmzamflKugeKZC22MP9r8c3xVeGwZoJzQgBm6ww3iV8fGrm3ZwYUpfsFVMxVG1ZZ-dgUMpTM7h9kWGa8l977k8sDaWMOpLYV3jgZ0R3eklG0DjpKixEJH4ZIXU4wSFY8P2RBF9rHYntv7nlA-sd8gzS70H9w6f--VVf9A8MSYQ-spib_36NEXTrXFvPafmcid-xhukj0IkIzXuueMdVVPnk851C7eb7mwZarxXwPzLFQlc3NHA9EpL70u_d20px2uLbd-mPip1neNfjXDHjdvZ7vMdQLe4I7U5QJA=w2106-h1404-no?authuser=0",
  caption: "La Habana, Cuba",
  subcaption: "Photo by Gerardo Sanchez on Unsplash",
  thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
}, {
  photo: "https://lh3.googleusercontent.com/m51nne7kZ3VqV1NOr-GavNfV6bY-XCHJGDufpO-sZirNgztLcDYE2346q2US5vdx8BWyDIfKGRWYN7CyRgmUJmoypdB4d25HGnffOGYGmFZis9uipqPwqthTtuJC65FDne5wqU6miFEEcmuDTIrFPOxSraAds0pUbnpc92Dhakewunm1-9cbKZiiOIc2mImASI4cmA_IufvHzFdiJoDLI7Z_RVFifcDjmcPvjD5izzp0J8pXoBh3zuvG_mgY9oCodOEbfRCfJ8tLytpXFQ_-d2Qn9ePVdrqLQWVqhYdh-p8QtoId3RTmLiFovpCydOZPVdwFjEmKl-NUI-sQrTf9uW6zFzvo_ezYmkWBFQwfcBn-rP79xWdPFbugsI4L1dWR4eVx34uk6p-h-44GejQLYj4MRGmzamflKugeKZC22MP9r8c3xVeGwZoJzQgBm6ww3iV8fGrm3ZwYUpfsFVMxVG1ZZ-dgUMpTM7h9kWGa8l977k8sDaWMOpLYV3jgZ0R3eklG0DjpKixEJH4ZIXU4wSFY8P2RBF9rHYntv7nlA-sd8gzS70H9w6f--VVf9A8MSYQ-spib_36NEXTrXFvPafmcid-xhukj0IkIzXuueMdVVPnk851C7eb7mwZarxXwPzLFQlc3NHA9EpL70u_d20px2uLbd-mPip1neNfjXDHjdvZ7vMdQLe4I7U5QJA=w2106-h1404-no?authuser=0",
  caption: "Woman smoking a tobacco",
  subcaption: "Photo by Hannah Cauhepe on Unsplash",
  thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
}];

class PhotoLibrary extends Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render () {
    return (
      <div className='photo-gallery-div'>
        <button onClick={this.toggleGallery}>Open photo gallery</button>
        <ReactBnbGallery
          show={this.state.galleryOpened}
          photos={photos}
          onClose={this.toggleGallery} />

      </div>
    )
  }
}

export default PhotoLibrary;