<body>
	<ion-split-pane content-id="main" when="xs">
		<ion-menu content-id="main" side="start" type="overlay">
			<ion-header>
				<ion-toolbar>
					<ion-title>🏡</ion-title>
				</ion-toolbar>
			</ion-header>
			<ion-content>
				<a href="blogs">blogs</a>
			</ion-content>
		</ion-menu>
		<ion-content id="main">
			<slot><!-- optional fallback --></slot>
		</ion-content>
	</ion-split-pane>
</body>

<script>
	// your script goes here
</script>

<style>
	/* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->