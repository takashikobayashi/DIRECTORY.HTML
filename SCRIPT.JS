/* JavaScript, html5, jQuery and CSS3 Study | (c) 2013-2014 twitter@sumo_ninja_jp
*/

(function( exports ){

var Dir = {};

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
    result += "<li data-icon='check'>";
    //result += "<input type='checkbox' id='dir_p02_cbr" + i + "'>";
    //result += "<label for='dir_p02_cbr" + i + "'>";
    result += "<h3 class='dir-li'>Key[" + i + "]: " + key + "</h3>";
    result += "<p class='dir-li'>Value: " + replaceTag( storage.getItem( key ) ) + "</p>";
    //reault += "</label>";
    result += "</li>";
  }
  result += "</ul>";

//alert(replaceTag(result));
  return result;
}

function replaceTag( str ) {
  return str.replace( /</g, "&lt" ).replace( />/g, "&gt" );
}
})( this );
