//Code that makes Var namespaced for a certain combo of JSX

var RecentChangesTable = React.createClass({  
render: function() {    
return 
<table>             
{this.props.children}
</table>
}
});
