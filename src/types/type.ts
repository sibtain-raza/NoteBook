
export type Notetype= {
    id:number;
    content:string;
    Headline:string;
    isArchived?:boolean;
    isStarred?:boolean;
}

export type booktype ={
    id:string;
    name:string;
    image_url:string;
    notes:Notetype[];
}