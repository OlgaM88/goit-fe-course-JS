'use strict';

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

const createPostCard = ({title, img, text, link}) => {
    const card = document.createElement('div');
    card.classList.add('post');
    
   const image = document.createElement('img');  
   image.classList.add('post__image');
   image.setAttribute("src", img);
   image.setAttribute("alt", "post image");
    
   const name = document.createElement('h2');  
   name.classList.add('post__title');
   name.textContent = title;
    
    const post = document.createElement('p');            
    post.classList.add('post__text');
    name.textContent = text;
    
    const button = document.createElement('a');                 
     button.classList.add('button');
     button.setAttribute("href", link);
     button.textContent = 'Read More';

    
    card.append(image, name, post, button);
    return card;
  }
  

  const createPosts = posts => {
      const element = posts.map(post => createPostCard(post));
      return element;
  }

  const postCard = document.querySelector('.postCard');
  const postsCard = createPosts(posts); 
  console.log(postsCard);
  postCard.append(...postsCard);
    