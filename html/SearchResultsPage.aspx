<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="Page.Master" %>

<asp:Content ID="Content2" ContentPlaceHolderID="cphAdditionalHead" runat="server">

</asp:Content>

<asp:Content ID="Content1" ContentPlaceHolderID="cphContent" runat="server" >

	<div class="hero-banner" style="background-image: url('img/content/12.jpg');">
		<div class="wrapper">
			<div class="page-title">
				<h1>Search Results</h1>
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
					Search results
				</li>
			</ul>
		</div>
	</div>

	<div class="search-results">
		<div class="wrapper">
			<aside class="search-sidebar">
				<h3>Search again</h3>
				<div class="input-holder">
					<label for="search-again"><span class="sr-only">Search again</span></label>
					<input type="text" id="search-again" placeholder="Search..." />
					<button type="button"><span class="zmdi zmdi-search"></span> <span class="sr-only">Search</span></button>
				</div>
			</aside>
			<div class="main-content">
				<div class="search-holder">
					<p class="search-summary">
						Your search for ‘lorem ipsum’ has returned 20 results:
					</p>
					<ul class="search-listing">
						<li>
							<h3><a href="javascript:;">Title</a></h3>
							<p><span class="keyword">Lorem ipsum</span> dolor sit amet, quot oratio mea ei. Ignota principes argumentum te qui, in qui diceret lucilius...</p>
						</li>
						<li>
							<h3><a href="javascript:;">Title</a></h3>
							<p><span class="keyword">Lorem ipsum</span> dolor sit amet, quot oratio mea ei. Ignota principes argumentum te qui, in qui diceret lucilius...</p>
						</li>
						<li>
							<h3><a href="javascript:;">Title</a></h3>
							<p><span class="keyword">Lorem ipsum</span> dolor sit amet, quot oratio mea ei. Ignota principes argumentum te qui, in qui diceret lucilius...</p>
						</li>
						<li>
							<h3><a href="javascript:;">Title</a></h3>
							<p><span class="keyword">Lorem ipsum</span> dolor sit amet, quot oratio mea ei. Ignota principes argumentum te qui, in qui diceret lucilius...</p>
						</li>
						<li>
							<h3><a href="javascript:;">Title</a></h3>
							<p><span class="keyword">Lorem ipsum</span> dolor sit amet, quot oratio mea ei. Ignota principes argumentum te qui, in qui diceret lucilius...</p>
						</li>
					</ul>
					<ul class="pagination">
						<li>
							<a href="javascript:;" class="prev"><span class="zmdi zmdi-arrow-left"></span> Prev</a>
						</li>
						<li>
							<a href="javascript:;" class="selected">1</a>
						</li>
						<li>
							<a href="javascript:;">2</a>
						</li>
						<li>
							<a href="javascript:;">3</a>
						</li>
						<li>
							<a href="javascript:;">4</a>
						</li>
						<li>
							<a href="javascript:;">5</a>
						</li>
						<li>
							<a href="javascript:;" class="next">Next <span class="zmdi zmdi-arrow-right"></span></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="cphAdditionalFooter" runat="server">
</asp:Content>
