const posts = [];

const images = [
    'D:\Javascript\masonry\images\A.png',
    'D:\Javascript\masonry\images\blue butterfly bg.png',
    'D:\Javascript\masonry\images\flight gean.png',
    'D:\Javascript\masonry\images\friendship.png',
    'D:\Javascript\masonry\images\ikemen idiots.png',
    'D:\Javascript\masonry\images\mech candy girl ig post.jpg',
    'D:\Javascript\masonry\images\shiori final.png',
    'D:\Javascript\masonry\images\skykids final.png',
    'D:\Javascript\masonry\images\witch sisters (complete).png'
    
];

let imageIndex = 0;

for(let i = 0; i< 80; i++) {
    let item = {
        id: i,
        title: `Post ${i}`,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if(imageIndex > images.length - 1) imageIndex=0;
}

console.log(posts);