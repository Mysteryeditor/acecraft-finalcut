export interface notes{
id:number
title:string
date:string
desc:string
listHead1:string
listPoints:listType[]
listHead2:string
listPoints2:listType[],
conclusion:string
}

interface listType{
    heading:string
    description:string
}