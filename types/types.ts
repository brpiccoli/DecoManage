export declare type ImagePickerResult = {
    cancelled: true;
} | ({
    cancelled: false;
} & ImageInfo);

export declare type ImageInfo = {
    uri: string;
    width: number;
    height: number;
    type?: 'image' | 'video';
    exit?: {
        [key: string]: any;
    };
    base64?: string;
};