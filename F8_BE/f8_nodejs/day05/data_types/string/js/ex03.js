// var html = "Học lập trình tại F8";

// document.write(html);

var content =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellat voluptatem illum numquam, eius dignissimos necessitatibus, esse, aspernatur officiis alias voluptatem aliquam delectus vel nemo debitis odio cupiditate incidunt impedit. Consequuntur?";

var keyword = "voluptatem";

// var position = content.indexOf(keyword);

// var firstContent = content.slice(0, position);

// content = content.slice(position);

// content =
//   firstContent +
//   "<span>" +
//   content.slice(0, keyword.length) +
//   "</span>" +
//   content.slice(keyword.length);

var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var contentFind = "";
while (position !== -1) {
  var firstContent = content.slice(0, position);
  content = content.slice(position);
  contentFind =
    contentFind +
    firstContent +
    "<span>" +
    content.slice(0, keyword.length) +
    "</span>";

  content = content.slice(keyword.length);

  position = content.toLowerCase().indexOf(keyword.toLowerCase());
}

content = contentFind + content;

document.write(content);
