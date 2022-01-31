import * as React from 'react';
import { Box, Video, Label } from '#vcs-react/components';
import { useActiveVideo } from '#vcs-react/hooks';
import * as layoutFuncs from '../layouts';
import { ParticipantLabelPipStyle } from './ParticipantLabelPipStyle';

export default function VideoPip({
  scaleMode,
  videoStyle,
  videoLabelStyle,
  placeholderStyle,
  showLabels,
  positionCorner,
  aspectRatio,
  height_vh,
  margin_vh,
}) {
  const { activeIds, dominantId, displayNamesById } = useActiveVideo();

  let firstVideoId = dominantId || activeIds[0];
  let otherVideoIds = activeIds.filter((id) => id !== firstVideoId);

  const items = [];

  if (!firstVideoId) {
    // if nobody is active, show a placeholder
    items.push(<Box style={placeholderStyle} />);
  } else {
    // render video with optional label
    const videoId = firstVideoId;
    const key = 0;
    
    items.push(
      <Video key={key + '_video'} src={videoId} scaleMode={scaleMode} />
    );

    if (showLabels) {
      items.push(
        <ParticipantLabelPipStyle
          key={key + '_label'}
          label={displayNamesById[videoId]}
          labelStyle={videoLabelStyle}
        />
      );
    }
  }

  if (otherVideoIds.length > 0) {
    // render second video inside PiP window
    const videoId = otherVideoIds[0];
    const key = 1;

    const layoutProps = {
      positionCorner,
      aspectRatio,
      height_vh,
      margin_vh,
    };
    const layout = [layoutFuncs.pip, layoutProps];

    items.push(
      <Video
        key={key + '_video'}
        src={videoId}
        style={videoStyle}
        scaleMode="fill"
        layout={layout}
      />
    );

    if (showLabels) {
      items.push(
        <ParticipantLabelPipStyle
          key={key + '_label'}
          label={displayNamesById[videoId]}
          labelStyle={videoLabelStyle}
          layout={layout}
        />
      );
    }
  }

  return <Box id="videopip">{items}</Box>;
}
