function ViewTypes_Batchlist() {
	MMBatchList_AssignList.call( this, 'BXTView_Types', true );
	this.Feature_SearchBar_SetPlaceholderText( 'Search Categories...' );
	this.SetDefaultSort( 'id', '' );
}

DeriveFrom( MMBatchList_AssignList, ViewTypes_Batchlist );

ViewTypes_Batchlist.prototype.onLoad = ViewTypes_List_Load_Query;

ViewTypes_Batchlist.prototype.onLoad = function( filter, sort, offset, count, callback, delegator ) {
	ViewTypes_List_Load_Query( this.load_assigned, this.load_unassigned, filter, sort, offset, count, callback, delegator );
}

ViewTypes_Batchlist.prototype.onCreateRootColumnList = function() {
	var columnlist =
	[
		new MMBatchList_Column_Name( 'Type ID', 'type_id', 'type_id')
		.SetDisplayInMenu(false)
		.SetDisplayInList(false)
		.SetAdvancedSearchEnabled(false),
		new MMBatchList_Column_Name( 'Category ID', 'category_id', 'category_id')
		.SetDisplayInMenu(false)
		.SetDisplayInList(false)
		.SetAdvancedSearchEnabled(false),
		new MMBatchList_Column_CheckboxSlider('Assigned', 'assigned', 'assigned', function( item, checked, delegator ) { ViewTypes_Batchlist.Update_Approved( item, checked, delegator ); } )
		.SetAdvancedSearchEnabled(false),
		new MMBatchList_Column_Text( 'Category Code', 'category_code', 'category_code' ),
		new MMBatchList_Column_Text( 'Category Name', 'category_name', 'category_name' ),
		new MMBatchList_Column_Text( 'Category Active', 'category_active', 'category_active' )
	];
	return columnlist;
}

// On Toggle'd Approved
ViewTypes_Batchlist.Update_Approved = function( item, checked, delegator ) {
	ViewTypes_Batchlist_Approved( item, checked, function( response ) {}, delegator );
}