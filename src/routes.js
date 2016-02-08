import React from 'react';
import { Route, Redirect } from 'react-router';

export default (
	<Route path="/" component={}>
)

/*<Route path="">
	<Redirect from="/" to="/account/profile" />
	<Route path="/" component={Marketplace}>
		<Redirect from="account" to="account/profile" />
		<Route path="account" component={AccountPage}>
			<Route path="profile" component={Account} />
			<Route path="taxes" component={Taxes} />
			<Route path="return_policy" component={ReturnPolicy} />
		</Route>
		<Redirect from="products" to="products/active" />
		<Route path="products" component={ProductPage}>
			<Route path="active" component={ActiveProducts} />
			<Route path="pending" component={PendingProducts} />
			<Route path="import" component={ImportProducts} />
			<Route path=":id" component={Product} />
		</Route>
		<Redirect from="shipping" to="shipping/providers" />
		<Route path="shipping" component={ShippingPage}>
			<Route path="providers" component={Providers} />
			<Route path="adjustments" component={Adjustments} />
		</Route>
	</Route>
</Route>*/