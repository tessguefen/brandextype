function ViewBrands_Batchlist() {
	MMBatchList_AssignList.call( this, 'BXTView_Brands', true );
	this.Feature_SearchBar_SetPlaceholderText( 'Search Categories...' );
	this.SetDefaultSort( 'id', '' );
}

DeriveFrom( MMBatchList_AssignList, ViewBrands_Batchlist );

ViewBrands_Batchlist.prototype.onLoad = ViewBrands_List_Load_Query;

ViewBrands_Batchlist.prototype.onLoad = function( filter, sort, offset, count, callback, delegator ) {
	ViewBrands_List_Load_Query( this.load_assigned, this.load_unassigned, filter, sort, offset, count, callback, delegator );
}

ViewBrands_Batchlist.prototype.onCreateRootColumnList = function() {
	var columnlist =
	[
		new MMBatchList_Column_Name( 'Brand ID', 'brand_id', 'brand_id')
		.SetDisplayInMenu(false)
		.SetDisplayInList(false)
		.SetAdvancedSearchEnabled(false),
		new MMBatchList_Column_Name( 'Category ID', 'category_id', 'category_id')
		.SetDisplayInMenu(false)
		.SetDisplayInList(false)
		.SetAdvancedSearchEnabled(false),
		new MMBatchList_Column_CheckboxSlider('Assigned', 'assigned', 'assigned', function( item, checked, delegator ) { ViewBrands_Batchlist.Update_Approved( item, checked, delegator ); } )
		.SetAdvancedSearchEnabled(false),
		new MMBatchList_Column_Text( 'Category Code', 'category_code', 'category_code' ),
		new MMBatchList_Column_Text( 'Category Name', 'category_name', 'category_name' ),
		new MMBatchList_Column_Text( 'Category Active', 'category_active', 'category_active' )
	];
	return columnlist;
}

// On Toggle'd Approved
ViewBrands_Batchlist.Update_Approved = function( item, checked, delegator ) {
	ViewBrands_Batchlist_Approved( item, checked, function( response ) {}, delegator );
}