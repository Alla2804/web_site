<?
class Blog{
  static function getPosts(){
      global $mysqli;
      $result = $mysqli->query("SELECT blog.id, blog.title, blog.text, blog.author, blog.date_added FROM `blog`"); // Запрашиваем все посты из БД
      // NULL == false
      // Наличие чего либо это всегда TRUE
      $posts = [];
      while($row = $result->fetch_assoc()){
        $posts[] = $row;
      }
      echo json_encode($posts);
  }
  static function getPost($id){
    global $mysqli;
    $result = $mysqli->query("SELECT * FROM `blog` WHERE id=$id"); // Выбор поста из БД по ID
    echo json_encode($result->fetch_assoc());
  }
  static function addPost($title,$text,$author){
  global $mysqli;
    function base64_to_image($base64_string) {

        // split the string on commas
        // $data[ 0 ] == "data:image/png;base64"
        // $data[ 1 ] == <actual base64 string>
        $data = explode( ',', $base64_string );
        $image_info = getimagesize($base64_string);
        $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"] )[1]: "");

        $output_file = 'userfile/'.time().'.'.$extension; // Путь к файлу на сервере
        $ifp = fopen( $output_file, 'xb' );

        // we could add validation here with ensuring count( $data ) > 1
        fwrite( $ifp, base64_decode( $data[ 1 ] ) );

        // clean up the file resource
        fclose( $ifp );

        return "/".$output_file; // Ссылка на файл после преобразования
    }
    $html = new simple_html_dom();
    $html->load($text);
    // $html->find("img") === document.querySelectorAll("img")
    foreach ($html->find("img") as $element){
        if(strripos($element->src,'http')!==false) continue;
        $element->src = base64_to_image($element->src);
    }
    $text = $html->save();
    $mysqli->query("INSERT INTO `blog`(`title`, `text`, `author`) VALUES ('$title','$text','$author')");
    echo json_encode(['result'=>"INSERT INTO `blog`(`title`, `text`, `author`) VALUES ('$title','$text','$author')"]);
    
  }
  static function removePosts($id){
    global $mysqli;
    $result = $mysqli->query("DELETE FROM `blog` WHERE id='$id'");  // удаление поста поста в БД 
    echo json_encode($result->fetch_assoc());
  }
  static function addCat($nickname,$text){
  global $mysqli;
    function base64_to_image($base64_string) {
      // split the string on commas
      // $data[ 0 ] == "data:image/png;base64"
      // $data[ 1 ] == <actual base64 string>
      $data = explode( ',', $base64_string );
      $image_info = getimagesize($base64_string);
      $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"] )[1]: "");

      $output_file = 'usercats/'.time().'.'.$extension; // Путь к файлу на сервере
      $ifp = fopen( $output_file, 'xb' );

      // we could add validation here with ensuring count( $data ) > 1
      fwrite( $ifp, base64_decode( $data[ 1 ] ) );

      // clean up the file resource
      fclose( $ifp );

      return "/".$output_file; // Ссылка на файл после преобразования
    }
    $html = new simple_html_dom();
    $html->load($text);
    // $html->find("img") === document.querySelectorAll("img")
    foreach ($html->find("img") as $element){
        if(strripos($element->src,'http')!==false) continue;
        $element->src = base64_to_image($element->src);
    }
    $text = $html->save();
    $mysqli->query("INSERT INTO `cats`(`nickname`, `text`) VALUES ('$nickname', '$text')"); // Добавление кошки в БД (кошки)
    echo json_encode(['result'=>'success']);
  }
  static function addDog($nickname,$text){
  global $mysqli;
    function base64_to_image($base64_string) {
      // split the string on commas
      // $data[ 0 ] == "data:image/png;base64"
      // $data[ 1 ] == <actual base64 string>
      $data = explode( ',', $base64_string );
      $image_info = getimagesize($base64_string);
      $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"] )[1]: "");

      $output_file = 'userdogs/'.time().'.'.$extension; // Путь к файлу на сервере
      $ifp = fopen( $output_file, 'xb' );

      // we could add validation here with ensuring count( $data ) > 1
      fwrite( $ifp, base64_decode( $data[ 1 ] ) );

      // clean up the file resource
      fclose( $ifp );

      return "/".$output_file; // Ссылка на файл после преобразования
    }
    $html = new simple_html_dom();
    $html->load($text);
    // $html->find("img") === document.querySelectorAll("img")
    foreach ($html->find("img") as $element){
        if(strripos($element->src,'http')!==false) continue;
        $element->src = base64_to_image($element->src);
    }
    $text = $html->save();
    $mysqli->query("INSERT INTO `dogs`(`nickname`, `text`) VALUES ('$nickname', '$text')"); // Добавление кошки в БД (кошки)
    echo json_encode(['result'=>'success']);
  }
  static function getCat($id){
    global $mysqli;
    $result = $mysqli->query("SELECT * FROM `cats` WHERE id=$id"); // Выбор поста из БД по ID
    echo json_encode($result->fetch_assoc());
  }
    static function getDog($id){
    global $mysqli;
    $result = $mysqli->query("SELECT * FROM `dogs` WHERE id=$id"); // Выбор поста из БД по ID
    echo json_encode($result->fetch_assoc());
  }
  static function getCats(){
      global $mysqli;
      $result = $mysqli->query("SELECT cats.id, cats.nickname, cats.text, cats.photo_1 FROM `cats`"); // Запрашиваем все посты из БД
      // NULL == false
      // Наличие чего либо это всегда TRUE
      $cats = [];
      while($row = $result->fetch_assoc()){
        $cats[] = $row;
      }
      echo json_encode($cats);
  }
  static function getDogs(){
      global $mysqli;
      $result = $mysqli->query("SELECT dogs.id, dogs.nickname, dogs.text, dogs.photo_1 FROM `dogs`"); // Запрашиваем все посты из БД
      // NULL == false
      // Наличие чего либо это всегда TRUE
      $dogs = [];
      while($row = $result->fetch_assoc()){
        $dogs[] = $row;
      }
      echo json_encode($dogs);      
	}
  static function removeCats($id){
      global $mysqli;
      $result = $mysqli->query("DELETE FROM `cats` WHERE id=$id");  // удаление поста поста в БД 
      echo json_encode($result->fetch_assoc());
  }
  static function removeDogs($id){
      global $mysqli;
      $result = $mysqli->query("DELETE FROM `dogs` WHERE id=$id");  // удаление поста поста в БД 
      echo json_encode($result->fetch_assoc());
  }
}
?>