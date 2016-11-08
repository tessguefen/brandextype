function ViewBrands_List_Load_Query( assigned, unassigned, filter, sort, offset, count, callback, delegator ) {
	return AJAX_Call_Module(	callback,
								'admin',
								'brandextype',
								'ViewBrands_Load_Query',
								'&Brand_ID=' + <MvEVAL EXPR = "{ g.View_Brand }"> +
								'&Filter=' + EncodeArray( filter ) +
								'&Sort=' + encodeURIComponent( sort ) +
								'&Offset=' + encodeURIComponent( offset ) +
								'&Assigned=' + ( assigned ? '1' : '0' ) +
					  			'&Unassigned='	+ ( unassigned ? '1' : '0' ) +
								'&Count=' + encodeURIComponent( count ),
								delegator );
}
// On Approved
function ViewBrands_Batchlist_Approved ( item, checked, callback, delegator ) {
	return AJAX_Call_Module(	callback,
								'admin',
								'brandextype',
								'BrandXCategoryAssign',
								'Category_ID='		+ encodeURIComponent( item.record.category_id ) +
								'&Brand_ID=' + encodeURIComponent( item.record.brand_id ) +
								'&Assign='	+ ( checked ? 1 : 0 ),
								delegator );
}