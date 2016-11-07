function ViewTypes_Batchlist() {
	MMBatchList.call( this, 'BXTTypes' );
	this.Feature_SearchBar_SetPlaceholderText( 'Search Types...' );
	this.SetDefaultSort( 'id', '' );
}

DeriveFrom( MMBatchList, ViewTypes_Batchlist );

ViewTypes_Batchlist.prototype.onLoad = ViewTypes_List_Load_Query;

ViewTypes_Batchlist.prototype.onCreateRootColumnList = function() {
	var columnlist =
	[
		new MMBatchList_Column_Name( 'Category ID', 'cat_id', 'cat_id')
		.SetDisplayInMenu(false)
		.SetDisplayInList(false)
		.SetAdvancedSearchEnabled(false),
		new MMBatchList_Column_CheckboxSlider('Assigned', 'assigned', 'assigned', function( item, checked, delegator ) { ViewTypes_Batchlist.Update_Approved( item, checked, delegator ); } ),
		new MMBatchList_Column_Text( 'Category Code', 'category_code', 'category_code' ),
		new MMBatchList_Column_Text( 'Category Name', 'category_name', 'category_name' )
	];
	return columnlist;
}