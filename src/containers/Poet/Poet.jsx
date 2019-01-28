import React from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import TimelineBlock from '../../components/TimeLineBlock';
import TimelineContent from '../../components/TimelineContent';
import TimelineDate from '../../components/TimelineDate';
import Works from '../../components/Works';
import Video from '../../components/Video';
import Map from '../../components/Map';
import authors from 'src/data';
import styles from './Poet.scss';
import TimeLineBlockStyles from '../../components/TimeLineBlock/TimeLineBlock.scss';
import TimelineDateStyles from '../../components/TimelineDate/TimelineDate.scss';
import TimelineContentStyles from '../../components/TimelineContent/TimelineContent.scss';
import WorksStyles from '../../components/Works/Works.scss';
import VideoStyles from '../../components/Video/Video.scss';

class Poet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: authors.find(author => author.id === props.match.params.id),
      photo: null,
      gallery: [],
      countLoadedImgs: 0,
      isGalleryLoaded: false,
    };
  }

  componentDidMount() {
    this._isMounted = true
    import(`src/images/photo/${this.state.author.photo}`).then(img => this._isMounted && this.setState({ photo: img.default }));
    this.state.author.gallery && this.state.author.gallery.forEach((src) => {
      import(`src/images/gallery/${src}`).then(img => {
        const countLoadedImgs = this.state.countLoadedImgs + 1;
        this._isMounted && this.setState({
          gallery: this.state.gallery.concat(img.default),
          countLoadedImgs,
          isGalleryLoaded: countLoadedImgs === this.state.author.gallery.length,
        });
      });
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { t, match } = this.props;
    const { bio, works, video, id, map } = this.state.author;
    return (
      <div className={styles.wrapper}>
        <p className={styles.aphtor}>{t('hello')} {match.params.id}</p>
        <div>{this.state.photo && <img src={this.state.photo} alt="Poet" />}</div>
        <div className={styles.timeline}>
          {bio.map(({ dataText, description }, index) => (
            <TimelineBlock key={index} className={TimeLineBlockStyles.timeLineBlockWrapper}>
              <TimelineDate className={TimelineDateStyles.timeLineDateWrapper} dataText={dataText} />
              <TimelineContent className={TimelineContentStyles.timeLineContentWrapper} description={description} />
            </TimelineBlock>
          ))}
          </div>
        {works.map(({ date, title }, i) => (
          <Works key={i} date={date} title={title} className={WorksStyles.worksWrapper}  />
        ))}
        <p className={styles.galleryname}>GALLERY</p>
        <div className={styles.gallerywrapper}>
          {this.state.isGalleryLoaded && this.state.gallery.map(img => (
            <div>
              <img style={{height:'300px', width:'400px'}} src={img} alt="galleryItem" />
            </div>
          ))}
        </div>
        <Video video={video} id={id} className={VideoStyles.videoWrapper} />
        <div className={styles.mapwrapper}>
          <Map
            width={950}
            height={500}
            mapState={{ center: map.center, zoom: 10 }}
            markGeometry={map.markGeometry}
          />
        </div>
      </div>
    );
  }
}

export default withNamespaces()(Poet);
