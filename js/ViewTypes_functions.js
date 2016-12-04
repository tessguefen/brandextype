function ViewTypes_List_Load_Query( assigned, unassigned, filter, sort, offset, count, callback, delegator ) {
	return AJAX_Call_Module(	callback,
								'admin',
								'brandextype',
								'ViewTypes_Load_Query',
								'&Type_ID=' + <MvEVAL EXPR = "{ g.View_Type }"> +
								'&Filter=' + EncodeArray( filter ) +
								'&Sort=' + encodeURIComponent( sort ) +
								'&Offset=' + encodeURIComponent( offset ) +
								'&Assigned=' + ( assigned ? '1' : '0' ) +
					  			'&Unassigned='	+ ( unassigned ? '1' : '0' ) +
								'&Count=' + encodeURIComponent( count ),
								delegator );
}
// On Approved
function ViewTypes_Batchlist_Approved ( item, checked, callback, delegator ) {
	return AJAX_Call_Module(	callback,
								'admin',
								'brandextype',
								'TypeXCategoryAssign',
								'Category_ID='		+ encodeURIComponent( item.record.category_id ) +
								'&Type_ID=' + encodeURIComponent( item.record.type_id ) +
								'&Assign='	+ ( checked ? 1 : 0 ),
								delegator );
}