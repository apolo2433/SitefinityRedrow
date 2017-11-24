<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="Page.Master" %>

<asp:Content ID="Content2" ContentPlaceHolderID="cphAdditionalHead" runat="server">

</asp:Content>

<asp:Content ID="Content1" ContentPlaceHolderID="cphContent" runat="server" >

	<div class="hero-banner" style="background-image: url('img/content/15.jpg');">
		<div class="wrapper">
			<div class="page-title">
				<h1>Page Not Found</h1>
			</div>
		</div>
	</div>

	<div class="breadcrumb">
		<div class="wrapper">
			<ul>
				<li>
					<a href="javascript:;">Home</a>
				</li>
				<li>
					Error 404
				</li>
			</ul>
		</div>
	</div>

	<div class="error-page">
		<div class="wrapper">
			<div class="main-content">
				<div class="rte-content">
					<h3>This might be because</h3>
					<ul>
						<li>You have typed the web address incorrectly test</li>
						<li>The page you were looking for may have been moved,updated or deleted</li>
					</ul>
					<h3>Please try the following options instead</h3>
					<ul>
						<li>Use our search above to find what are you looking for</li>
						<li>Go to our <a href="javascript:;">homepage</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="cphAdditionalFooter" runat="server">
</asp:Content>
