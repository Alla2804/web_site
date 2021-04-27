<?
  header("Access-Control-Allow-Origin: *");
  header('Content-type: text/html; charset=utf-8');
  $uri = explode('/',$_SERVER["REQUEST_URI"]);
  require_once('php/db.php'); // Параметры подключения к БД
  require_once("php/classes/simple_html_dom.php");
  require_once('php/classes/Blog.php');
  if($uri[1]=='getPosts'){
    Blog::getPosts();
  }else if($uri[1]=='getPost'){
    Blog::getPost($_POST['id']);
  }else if($uri[1]=='addPost'){
    Blog::addPost($_POST['title'],$_POST['text'],$_POST['author']);
  }else if($uri[1]=='removePost'){
    Blog::removePost($_POST['id']);
  }else if($uri[1]=='addCat'){
    Blog::addCat($_POST['nickname'],$_POST['text']);
  }else if($uri[1]=='getCat'){
    Blog::getCat($_POST['id']);
  }else if($uri[1]=='getCats'){
    Blog::getCats();
  }else if($uri[1]=='addDog'){
    Blog::addDog($_POST['nickname'],$_POST['text']);
  }else if($uri[1]=='getDog'){
    Blog::getDog($_POST['id']);
  }else if($uri[1]=='getDogs'){
    Blog::getDogs();
  }else if($uri[1]=='removeCats'){
    Blog::removeCats($_POST['id']);
  }else if($uri[1]=='removeDogs'){
    Blog::removeDogs($_POST['id']);
  }else{
    require_once("index.html");
  }
  
  
?>