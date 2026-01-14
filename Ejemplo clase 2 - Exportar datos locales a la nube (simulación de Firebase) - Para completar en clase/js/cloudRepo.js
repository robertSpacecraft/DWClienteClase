"use strict";

const cloudDb = [];

export function uploadItem(item){
    return new Promise((resolve) => {
        setTimeout(() => {
            cloudDb.push({...item, cloudId: crypto.randomUUID()});
            resolve();
        }, 500);
    });
}

export function getCloudData(){
    return [...cloudDb];
}

export function clearCloud(){
    cloudDb.length = 0;
}