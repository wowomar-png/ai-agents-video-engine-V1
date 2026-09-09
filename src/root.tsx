import React from 'react';
import {Composition} from 'remotion';
import {CarLesson, type LessonProps} from './car-lesson';
import lesson from '../public/lesson.json';
const defaults = lesson as LessonProps;
export const Root: React.FC = () => <><Composition id="CarLessonLong" component={CarLesson} durationInFrames={900} fps={30} width={1920} height={1080} defaultProps={{...defaults,format:'long'}}/><Composition id="CarLessonShort" component={CarLesson} durationInFrames={900} fps={30} width={1080} height={1920} defaultProps={{...defaults,format:'short'}}/></>;
