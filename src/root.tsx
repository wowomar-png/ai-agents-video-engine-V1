import React from 'react';
import {Composition,Still} from 'remotion';
import {CarLesson,CarShort,Thumbnail,type LessonProps} from './car-lesson';
import lesson from '../public/lesson.json';
const defaults=lesson as LessonProps;
export const Root:React.FC=()=> <>
 <Composition id="CarLessonLong" component={CarLesson} durationInFrames={23400} fps={30} width={1920} height={1080} defaultProps={{...defaults,format:'long'}}/>
 {[0,1,2,3,4].map(i=><Composition key={i} id={`CarLessonShort0${i+1}`} component={CarShort} durationInFrames={1500} fps={30} width={1080} height={1920} defaultProps={{...defaults,format:'short',shortIndex:i}}/>)}
 <Still id="CarLessonThumbnail" component={Thumbnail} width={1280} height={720} defaultProps={{...defaults,format:'long' }}/>
</>;
