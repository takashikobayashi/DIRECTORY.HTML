/* JavaScript, html5, jQuery and CSS3 Study | (c) 2013 twitter@sumo_ninja_jp
*/
var storage = localStorage;

$( "#dir_p02" ).on( "pageinit", function( e ){
  viewStorage();
} );

function viewStorage() {

//alert( $( "#dir_p02_org" ) );
//alert( document );

  $( "#dir_p02_org" ).text( "Origin: " + document.domain );

  $( "#dir_p02_att" ).text( "Number of entries: " + storage.length );

  $( "#dir_p02_elm" ).empty();
  $( "#dir_p02_elm" ).append( updateList() );

  $( "#dir_p02_elm" ).trigger( "create" );
  $( "#dir_p02_lst" ).listview( "refresh" );

//alert($( "#dir_p02_lst" ).html());
}

function updateList() {
  var result = "";
  var key;

  if( storage.length <= 0 ) {
    return result;
  }

  result = "<h2>Entries:</h2>";
  result += "<ul id='dir_p02_lst' data-role='listview'>";

  for( var i = 0; i < storage.length; i++ ) {
    key = storage.key( i );
    result += "<li>";
    result += "<h3 class='dir-li'>Key[" + i + "]: " + key + "</h3>";
    result += "<p class='dir-li'>Value: " + storage.getItem( key ) + "</p>";
    result += "</li>";
  }
  result += "</ul>";

//alert(result);
  return result;
}
