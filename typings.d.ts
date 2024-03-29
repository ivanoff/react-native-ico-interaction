declare module 'react-native-ico-interaction' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'archive-1' |
      'archive-10' |
      'archive-11' |
      'archive-12' |
      'archive-13' |
      'archive-14' |
      'archive-15' |
      'archive-16' |
      'archive-17' |
      'archive-18' |
      'archive-19' |
      'archive-2' |
      'archive-3' |
      'archive-4' |
      'archive-5' |
      'archive-6' |
      'archive-7' |
      'archive-8' |
      'archive-9' |
      'archive' |
      'bookmark-1' |
      'bookmark-10' |
      'bookmark-11' |
      'bookmark-12' |
      'bookmark-13' |
      'bookmark-14' |
      'bookmark-15' |
      'bookmark-16' |
      'bookmark-17' |
      'bookmark-18' |
      'bookmark-19' |
      'bookmark-2' |
      'bookmark-3' |
      'bookmark-4' |
      'bookmark-5' |
      'bookmark-6' |
      'bookmark-7' |
      'bookmark-8' |
      'bookmark-9' |
      'bookmark' |
      'browser-1' |
      'browser-10' |
      'browser-11' |
      'browser-12' |
      'browser-13' |
      'browser-14' |
      'browser-15' |
      'browser-16' |
      'browser-17' |
      'browser-18' |
      'browser-19' |
      'browser-2' |
      'browser-3' |
      'browser-4' |
      'browser-5' |
      'browser-6' |
      'browser-7' |
      'browser-8' |
      'browser-9' |
      'browser' |
      'calendar-1' |
      'calendar-10' |
      'calendar-11' |
      'calendar-12' |
      'calendar-13' |
      'calendar-14' |
      'calendar-15' |
      'calendar-16' |
      'calendar-17' |
      'calendar-18' |
      'calendar-19' |
      'calendar-2' |
      'calendar-20' |
      'calendar-21' |
      'calendar-22' |
      'calendar-23' |
      'calendar-24' |
      'calendar-25' |
      'calendar-26' |
      'calendar-27' |
      'calendar-28' |
      'calendar-29' |
      'calendar-3' |
      'calendar-30' |
      'calendar-31' |
      'calendar-32' |
      'calendar-33' |
      'calendar-34' |
      'calendar-35' |
      'calendar-36' |
      'calendar-37' |
      'calendar-38' |
      'calendar-39' |
      'calendar-4' |
      'calendar-5' |
      'calendar-6' |
      'calendar-7' |
      'calendar-8' |
      'calendar-9' |
      'calendar' |
      'cloud-computing-1' |
      'cloud-computing-10' |
      'cloud-computing-11' |
      'cloud-computing-12' |
      'cloud-computing-13' |
      'cloud-computing-14' |
      'cloud-computing-15' |
      'cloud-computing-16' |
      'cloud-computing-17' |
      'cloud-computing-18' |
      'cloud-computing-19' |
      'cloud-computing-2' |
      'cloud-computing-3' |
      'cloud-computing-4' |
      'cloud-computing-5' |
      'cloud-computing-6' |
      'cloud-computing-7' |
      'cloud-computing-8' |
      'cloud-computing-9' |
      'cloud-computing' |
      'database-1' |
      'database-10' |
      'database-11' |
      'database-12' |
      'database-13' |
      'database-14' |
      'database-15' |
      'database-16' |
      'database-17' |
      'database-18' |
      'database-19' |
      'database-2' |
      'database-3' |
      'database-4' |
      'database-5' |
      'database-6' |
      'database-7' |
      'database-8' |
      'database-9' |
      'database' |
      'envelope-1' |
      'envelope-2' |
      'envelope' |
      'file-1' |
      'file-10' |
      'file-11' |
      'file-12' |
      'file-13' |
      'file-14' |
      'file-15' |
      'file-16' |
      'file-17' |
      'file-18' |
      'file-19' |
      'file-2' |
      'file-3' |
      'file-4' |
      'file-5' |
      'file-6' |
      'file-7' |
      'file-8' |
      'file-9' |
      'file' |
      'folder-1' |
      'folder-10' |
      'folder-11' |
      'folder-12' |
      'folder-13' |
      'folder-14' |
      'folder-15' |
      'folder-16' |
      'folder-17' |
      'folder-18' |
      'folder-19' |
      'folder-2' |
      'folder-3' |
      'folder-4' |
      'folder-5' |
      'folder-6' |
      'folder-7' |
      'folder-8' |
      'folder-9' |
      'folder' |
      'image-1' |
      'image-10' |
      'image-11' |
      'image-12' |
      'image-13' |
      'image-14' |
      'image-15' |
      'image-16' |
      'image-17' |
      'image-18' |
      'image-19' |
      'image-2' |
      'image-3' |
      'image-4' |
      'image-5' |
      'image-6' |
      'image-7' |
      'image-8' |
      'image-9' |
      'image' |
      'list-1' |
      'list-10' |
      'list-11' |
      'list-12' |
      'list-13' |
      'list-14' |
      'list-15' |
      'list-16' |
      'list-17' |
      'list-18' |
      'list-19' |
      'list-2' |
      'list-3' |
      'list-4' |
      'list-5' |
      'list-6' |
      'list-7' |
      'list-8' |
      'list-9' |
      'list' |
      'mail-1' |
      'mail-10' |
      'mail-11' |
      'mail-12' |
      'mail-13' |
      'mail-14' |
      'mail-15' |
      'mail-16' |
      'mail-2' |
      'mail-3' |
      'mail-4' |
      'mail-5' |
      'mail-6' |
      'mail-7' |
      'mail-8' |
      'mail-9' |
      'mail' |
      'map-1' |
      'map-10' |
      'map-11' |
      'map-12' |
      'map-13' |
      'map-14' |
      'map-15' |
      'map-16' |
      'map-17' |
      'map-18' |
      'map-19' |
      'map-2' |
      'map-3' |
      'map-4' |
      'map-5' |
      'map-6' |
      'map-7' |
      'map-8' |
      'map-9' |
      'map' |
      'music-player-1' |
      'music-player-10' |
      'music-player-11' |
      'music-player-12' |
      'music-player-13' |
      'music-player-14' |
      'music-player-15' |
      'music-player-16' |
      'music-player-17' |
      'music-player-18' |
      'music-player-19' |
      'music-player-2' |
      'music-player-3' |
      'music-player-4' |
      'music-player-5' |
      'music-player-6' |
      'music-player-7' |
      'music-player-8' |
      'music-player-9' |
      'music-player' |
      'notebook-1' |
      'notebook-10' |
      'notebook-11' |
      'notebook-12' |
      'notebook-13' |
      'notebook-14' |
      'notebook-15' |
      'notebook-16' |
      'notebook-17' |
      'notebook-18' |
      'notebook-19' |
      'notebook-2' |
      'notebook-3' |
      'notebook-4' |
      'notebook-5' |
      'notebook-6' |
      'notebook-7' |
      'notebook-8' |
      'notebook-9' |
      'notebook' |
      'notepad-1' |
      'notepad-10' |
      'notepad-11' |
      'notepad-12' |
      'notepad-13' |
      'notepad-14' |
      'notepad-15' |
      'notepad-16' |
      'notepad-17' |
      'notepad-18' |
      'notepad-19' |
      'notepad-2' |
      'notepad-3' |
      'notepad-4' |
      'notepad-5' |
      'notepad-6' |
      'notepad-7' |
      'notepad-8' |
      'notepad-9' |
      'notepad' |
      'phone-call-1' |
      'phone-call-10' |
      'phone-call-11' |
      'phone-call-12' |
      'phone-call-13' |
      'phone-call-14' |
      'phone-call-15' |
      'phone-call-16' |
      'phone-call-17' |
      'phone-call-18' |
      'phone-call-19' |
      'phone-call-2' |
      'phone-call-3' |
      'phone-call-4' |
      'phone-call-5' |
      'phone-call-6' |
      'phone-call-7' |
      'phone-call-8' |
      'phone-call-9' |
      'phone-call' |
      'placeholder-1' |
      'placeholder-10' |
      'placeholder-11' |
      'placeholder-12' |
      'placeholder-13' |
      'placeholder-14' |
      'placeholder-15' |
      'placeholder-16' |
      'placeholder-17' |
      'placeholder-18' |
      'placeholder-19' |
      'placeholder-2' |
      'placeholder-3' |
      'placeholder-4' |
      'placeholder-5' |
      'placeholder-6' |
      'placeholder-7' |
      'placeholder-8' |
      'placeholder-9' |
      'placeholder' |
      'price-tag-1' |
      'price-tag-10' |
      'price-tag-11' |
      'price-tag-12' |
      'price-tag-13' |
      'price-tag-14' |
      'price-tag-15' |
      'price-tag-16' |
      'price-tag-17' |
      'price-tag-18' |
      'price-tag-19' |
      'price-tag-2' |
      'price-tag-3' |
      'price-tag-4' |
      'price-tag-5' |
      'price-tag-6' |
      'price-tag-7' |
      'price-tag-8' |
      'price-tag-9' |
      'price-tag' |
      'server-1' |
      'server-10' |
      'server-11' |
      'server-12' |
      'server-13' |
      'server-14' |
      'server-15' |
      'server-16' |
      'server-17' |
      'server-18' |
      'server-19' |
      'server-2' |
      'server-3' |
      'server-4' |
      'server-5' |
      'server-6' |
      'server-7' |
      'server-8' |
      'server-9' |
      'server' |
      'signs-1' |
      'signs-2' |
      'signs-3' |
      'signs-4' |
      'signs-5' |
      'signs-6' |
      'signs-7' |
      'signs-8' |
      'signs-9' |
      'signs' |
      'smartphone-1' |
      'smartphone-10' |
      'smartphone-11' |
      'smartphone-12' |
      'smartphone-13' |
      'smartphone-14' |
      'smartphone-15' |
      'smartphone-16' |
      'smartphone-17' |
      'smartphone-18' |
      'smartphone-19' |
      'smartphone-2' |
      'smartphone-3' |
      'smartphone-4' |
      'smartphone-5' |
      'smartphone-6' |
      'smartphone-7' |
      'smartphone-8' |
      'smartphone-9' |
      'smartphone' |
      'speech-bubble-1' |
      'speech-bubble-10' |
      'speech-bubble-11' |
      'speech-bubble-12' |
      'speech-bubble-13' |
      'speech-bubble-14' |
      'speech-bubble-15' |
      'speech-bubble-16' |
      'speech-bubble-17' |
      'speech-bubble-18' |
      'speech-bubble-19' |
      'speech-bubble-2' |
      'speech-bubble-3' |
      'speech-bubble-4' |
      'speech-bubble-5' |
      'speech-bubble-6' |
      'speech-bubble-7' |
      'speech-bubble-8' |
      'speech-bubble-9' |
      'speech-bubble' |
      'stopwatch-1' |
      'stopwatch-10' |
      'stopwatch-11' |
      'stopwatch-12' |
      'stopwatch-13' |
      'stopwatch-14' |
      'stopwatch-15' |
      'stopwatch-16' |
      'stopwatch-17' |
      'stopwatch-18' |
      'stopwatch-19' |
      'stopwatch-2' |
      'stopwatch-20' |
      'stopwatch-21' |
      'stopwatch-22' |
      'stopwatch-23' |
      'stopwatch-24' |
      'stopwatch-25' |
      'stopwatch-26' |
      'stopwatch-27' |
      'stopwatch-28' |
      'stopwatch-29' |
      'stopwatch-3' |
      'stopwatch-4' |
      'stopwatch-5' |
      'stopwatch-6' |
      'stopwatch-7' |
      'stopwatch-8' |
      'stopwatch-9' |
      'stopwatch' |
      'user-1' |
      'user-10' |
      'user-11' |
      'user-12' |
      'user-13' |
      'user-14' |
      'user-15' |
      'user-16' |
      'user-17' |
      'user-18' |
      'user-19' |
      'user-2' |
      'user-20' |
      'user-21' |
      'user-22' |
      'user-23' |
      'user-24' |
      'user-25' |
      'user-26' |
      'user-27' |
      'user-28' |
      'user-29' |
      'user-3' |
      'user-30' |
      'user-31' |
      'user-32' |
      'user-33' |
      'user-34' |
      'user-35' |
      'user-36' |
      'user-37' |
      'user-38' |
      'user-39' |
      'user-4' |
      'user-40' |
      'user-41' |
      'user-42' |
      'user-43' |
      'user-44' |
      'user-45' |
      'user-46' |
      'user-47' |
      'user-48' |
      'user-49' |
      'user-5' |
      'user-50' |
      'user-51' |
      'user-52' |
      'user-53' |
      'user-54' |
      'user-55' |
      'user-56' |
      'user-57' |
      'user-58' |
      'user-59' |
      'user-6' |
      'user-7' |
      'user-8' |
      'user-9' |
      'user' |
      'video-player-1' |
      'video-player-10' |
      'video-player-11' |
      'video-player-12' |
      'video-player-13' |
      'video-player-14' |
      'video-player-15' |
      'video-player-16' |
      'video-player-17' |
      'video-player-18' |
      'video-player-19' |
      'video-player-2' |
      'video-player-3' |
      'video-player-4' |
      'video-player-5' |
      'video-player-6' |
      'video-player-7' |
      'video-player-8' |
      'video-player-9' |
      'video-player';

    type iconColors = ;

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
