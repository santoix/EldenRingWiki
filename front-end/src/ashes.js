import { useState } from "react";
import axios from "axios";


const Ashes = () => {

    // const [name, setName] = useState('teste');

    // const handClick = () => {
    //    setName('Pass');
    // }

    let [post, setPost] = useState([
        { title: 'ashes new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'teste2 party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'teste3 dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

    


    return (
        <div className="home">
            {post.map(post => (
                <div className="postpreview" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
      );
}
 
export default Ashes;
