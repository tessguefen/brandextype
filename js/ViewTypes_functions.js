function ViewTypes_List_Load_Query( filter, sort, offset, count, callback, delegator ) {
	return AJAX_Call_Module(	callback,
								'admin',
								'Typeextype',
								'ViewTypes_Load_Query',
								'&Filter=' + EncodeArray( filter ) +
								'&Sort=' + encodeURIComponent( sort ) +
								'&Offset=' + encodeURIComponent( offset ) +
								'&Count=' + encodeURIComponent( count ),
								delegator );
}
// On Approved
function ViewTypes_Batchlist_Approved ( id, checked, callback, delegator ) {
	return AJAX_Call_Module(	callback,
								'admin',
								'Typeextype',
								'TypeXCategoryAssign',
								'Category_ID='		+ encodeURIComponent( id ) +
								'&Assign='	+ ( checked ? 1 : 0 ),
								delegator );
}
