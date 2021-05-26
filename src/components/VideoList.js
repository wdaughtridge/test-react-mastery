import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    if (videos.length == 0) {
        return <div></div>
    }

    const renderedList = videos.map((video) => {
        return <VideoItem video={video} onVideoSelect={onVideoSelect}/>;
    });

    return <div className="ui segment relaxed divided list">{renderedList}</div>;
};

export default VideoList;