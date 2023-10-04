import { PostService } from './05-dependency-b';
import { DataBaseDataBaseService } from './05-dependency-c';


// Main
(async () => {

    const postProvider = new DataBaseDataBaseService();
    //const postProvider = new LocalDataBaseService();

    const postService = new PostService(postProvider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();