var PlanningView = function (container, model) {

	model.addObserver(this);
	this.PlanningView = container.find("#planning-view");
	this.addActivity = container.find("#add-day");

	

	var name = "";
	var time; 
	var description; 
	var type;

	
	function getTable(){
		
		this.table = container.find(".table-parked");
		table.html("");
		
		//this.table.html("<table>");
		var x = document.createElement("table");
		 x.setAttribute("id", "content-table" );
		 
		 document.getElementById("activity-table-content").appendChild(x);
		 
		for(i= 0; i< model.parkedActivities.length; i++){


		 name = model.parkedActivities[i].getName();
		 time = model.parkedActivities[i].getLength();
		 description = model.parkedActivities[i].getDescription();

		 
		id = "draggable"+i.toString();
		 
		 var tableRow = document.createElement("div");
		 tableRow.setAttribute("id", id);
		 tableRow.setAttribute("class", "row");
		 document.getElementById("content-table").appendChild(tableRow);
		 
		var actCol = document.createElement("TD");
		var actString = document.createTextNode(name);
		
		var timeCol = document.createElement("TD");
		var timeString = document.createTextNode(time+" min");
		
		
		actCol.appendChild(actString);
		timeCol.appendChild(timeString);
		document.getElementById(id).appendChild(actCol);
		document.getElementById(id).appendChild(timeCol);
		 
		 
		
		 
		 }
		 

}


	this.update = function(arg){
		
	
		getTable();
		
		
		$(function() {
			
			
		var $parked = $( "#activity-table-content" ),
		$day = $( "#day-rect" );
	  
	      $( "div", $parked ).draggable({
      cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move"
    });
 
    // let the trash be droppable, accepting the gallery items
    $day.droppable({
      accept: "#activity-table-content > div",
      activeClass: "ui-state-highlight",
      drop: function( event, ui ) {
        deleteImage( ui.draggable );
      }
    });
 
    // let the gallery be droppable as well, accepting items from the trash
    $parked.droppable({
      accept: "#day-rect div",
      activeClass: "custom-state-active",
      drop: function( event, ui ) {
        //recycleImage( ui.draggable );
      }
    });
	  
	  
	   var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    function deleteImage( $item ) {
      $item.fadeOut(function() {
        var $list = $( "ul", $trash ).length ?
          $( "ul", $trash ) :
          $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $trash );
 
        $item.find( "a.ui-icon-trash" ).remove();
        $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
          $item
            .animate({ width: "48px" })
            .find( "img" )
              .animate({ height: "36px" });
        });
      });
    }
 
    // image recycle function
    var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
    function recycleImage( $item ) {
      $item.fadeOut(function() {
        $item
          .find( "a.ui-icon-refresh" )
            .remove()
          .end()
          .css( "width", "96px")
          .append( trash_icon )
          .find( "img" )
            .css( "height", "72px" )
          .end()
          .appendTo( $gallery )
          .fadeIn();
      });
    }
	  
	  
	  /*
    $( ".row" ).draggable();
    $( "#day-rect" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "div" )
            .html( "Dropped!" );
      }
    });*/
  });


	}



}
