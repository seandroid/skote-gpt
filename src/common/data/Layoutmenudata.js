const Navdata = [
	{
		label: 'Menu',
		isHeader: true
	},
	{
		icon: 'bx bx-home-circle',
		label: 'Dashboards',
		subMenu: [
			{ link: '/dashboard', label: 'Default' },
			{ link: '/dashboard-saas', label: 'Saas' },
			{ link: '/dashboard-jobs', label: 'Jobs' }
		]
	},
	{
		label: 'Apps',
		isHeader: true
	},
	{
		icon: 'bx bx-calendar',
		label: 'Calendars',
		subMenu: [{ link: '/calendar', label: 'Full Calendar' }]
	},
	{
		icon: 'bx bx-chat',
		label: 'Chat',
		link: '/chat'
	},
	{
		icon: 'bx bx-file',
		label: 'File Manager',
		link: '/filemanager'
	},
	{
		icon: 'bx bx-store',
		label: 'Ecommerce',
		subMenu: [
			{ link: '/ecommerce/products', label: 'Products' },
			{ link: '/ecommerce/product-detail', label: 'Product Detail' },
			{ link: '/ecommerce/orders', label: 'Orders' },
			{ link: '/ecommerce/customers', label: 'Customers' },
			{ link: '/ecommerce/cart', label: 'Cart' },
			{ link: '/ecommerce/checkout', label: 'Checkout' },
			{ link: '/ecommerce/shops', label: 'Shops' },
			{ link: '/ecommerce/add-product', label: 'Add Product' }
		]
	},
	{
		icon: 'bx bx-envelope',
		label: 'Email',
		subMenu: [
			{ link: '/email/inbox', label: 'Inbox' },
			{ link: '/email/read', label: 'Read Email' },
			{
				label: 'Templates',
				isChildItem: true,
				childItems: [
					{ link: '/email/template/basic', label: 'Basic Action' },
					{ link: '/email/template/alert', label: 'Alert Email' },
					{ link: '/email/template/billing', label: 'Billing Email' }
				]
			}
		]
	},
	{
		icon: 'bx bx-receipt',
		label: 'Invoices',
		subMenu: [
			{ link: '/invoice/list', label: 'Invoice List' },
			{ link: '/invoice/detail', label: 'Invoice Detail' }
		]
	},
	{
		icon: 'bx bx-briefcase-alt-2',
		label: 'Projects',
		subMenu: [
			{ link: '/projects/grid', label: 'Projects Grid' },
			{ link: '/projects/list', label: 'Projects List' },
			{ link: '/projects/overview', label: 'Project Overview' },
			{ link: '/projects/create', label: 'Create New' }
		]
	},
	{
		icon: 'bx bx-task',
		label: 'Tasks',
		subMenu: [
			{ link: '/tasks/list', label: 'Task List' },
			{ link: '/tasks/kanban', label: 'Kanban Board' },
			{ link: '/tasks/create', label: 'Create Task' }
		]
	},
	{
		icon: 'bx bxs-user-detail',
		label: 'Contacts',
		subMenu: [
			{ link: '/contacts/grid', label: 'Users Grid' },
			{ link: '/contacts/list', label: 'Users List' },
			{ link: '/contacts/profile', label: 'Profile' }
		]
	},
	{
		icon: 'bx bx-briefcase-alt',
		label: 'Jobs',
		subMenu: [
			{ link: '/jobs/list', label: 'Job List' },
			{ link: '/jobs/grid', label: 'Job Grid' },
			{ link: '/jobs/apply', label: 'Apply Job' },
			{ link: '/jobs/details', label: 'Job Details' },
			{ link: '/jobs/category', label: 'Job Categories' },
			{
				link: '#',
				label: 'Candidate',
				isChildItem: true,
				childItems: [
					{ link: '/jobs/candidate-list', label: 'List' },
					{ link: '/jobs/candidate-overview', label: 'Overview' }
				]
			}
		]
	},
	{
		label: 'Pages',
		isHeader: true
	},
	{
		label: 'Authentication',
		icon: 'bx bx-user-circle',
		subMenu: [
			{ label: 'Login', link: '/auth/login' },
			{ label: 'Register', link: '/auth/register' },
			{ label: 'Recover Password', link: '/auth/recoverpw' },
			{ label: 'Lock Screen', link: '/auth/lock-screen' },
			{ label: 'Lock Screen 2', link: '/auth/lock-screen-2' },
			{ label: 'Confirm Email', link: '/auth/confirm-mail' },
			{ label: 'Email verification', link: '/auth/email-verification' },
			{ label: 'Two Step Verification', link: '/auth/two-step-verification' },
			{ label: 'Two Step Verification 2', link: '/auth/two-step-verification-2' }
		]
	},
	{
		label: 'Utility',
		icon: 'bx bx-file',
		subMenu: [
			{ label: 'Starter Page', link: '/pages/starter' },
			{ label: 'Maintenance', link: '/pages/maintenance' },
			{ label: 'Coming Soon', link: '/pages/comingsoon' },
			{ label: 'Timeline', link: '/pages/timeline' },
			{ label: 'FAQs', link: '/pages/faqs' },
			{ label: 'Pricing', link: '/pages/pricing' },
			{ label: 'Error 404', link: '/pages/404' },
			{ label: 'Error 500', link: '/pages/500' }
		]
	},
	{
		label: 'Components',
		isHeader: true
	},
	{
		label: 'UI Elements',
		icon: 'bx bx-tone',
		subMenu: [
			{ link: '/ui/alerts', label: 'Alerts' },
			{ link: '/ui/buttons', label: 'Buttons' },
			{ link: '/ui/cards', label: 'Cards' },
			{ link: '/ui/carousel', label: 'Carousel' },
			{ link: '/ui/dropdowns', label: 'Dropdowns' },
			{ link: '/ui/grid', label: 'Grid' },
			{ link: '/ui/images', label: 'Images' },
			{ link: '/ui/lightbox', label: 'Lightbox' },
			{ link: '/ui/modals', label: 'Modals' },
			{ link: '/ui/offcanvas', label: 'Offcanvas' },
			{ link: '/ui/rangeslider', label: 'Range Slider' },
			{ link: '/ui/session-timeout', label: 'Session Timeout' },
			{ link: '/ui/progressbars', label: 'Progress Bars' },
			{ link: '/ui/placeholders', label: 'Placeholders' },
			{ link: '/ui/sweet-alert', label: 'Sweet-Alert' },
			{ link: '/ui/tabs-accordions', label: 'Tabs & Accordions' },
			{ link: '/ui/typography', label: 'Typography' },
			{ link: '/ui/toasts', label: 'Toasts' },
			{ link: '/ui/video', label: 'Video' },
			{ link: '/ui/general', label: 'General' },
			{ link: '/ui/colors', label: 'Colors' },
			{ link: '/ui/rating', label: 'Rating' },
			{ link: '/ui/utilities', label: 'Utilities' }
		]
	},
	{
		label: 'Forms',
		icon: 'bx bxs-eraser',
		badge: { color: 'bg-danger', value: '10' },
		subMenu: [
			{ label: 'Form Elements', link: '/form/elements' },
			{ label: 'Form Layouts', link: '/form/layouts' },
			{ label: 'Form Validation', link: '/form/validation' },
			{ label: 'Form Advanced', link: '/form/advanced' },
			{ label: 'Form File Upload', link: '/form/uploads' },
			{ label: 'Form Repeater', link: '/form/repeater' },
			{ label: 'Form Wizard', link: '/form/wizard' }
		]
	},
	{
		label: 'Tables',
		icon: 'bx bx-list-ul',
		subMenu: [
			{ label: 'Basic Tables', link: '/tables/basic' },
			{ label: 'Data Tables', link: '/tables/datatable' },
			{ label: 'Responsive Table', link: '/tables/responsive' }
		]
	},
	{
		label: 'Charts',
		icon: 'bx bxs-bar-chart-alt-2',
		subMenu: [
			{ label: 'Apex Charts', link: '/charts/apex' },
			{ label: 'Chartjs Charts', link: '/charts/chartjs' }
		]
	},
	{
		label: 'Icons',
		icon: 'bx bx-aperture',
		subMenu: [
			{ label: 'Boxicons', link: '/icons/boxicons' },
			{ label: 'Material Design', link: '/icons/materialdesign' },
			{ label: 'Dripicons', link: '/icons/dripicons' },
			{ label: 'Font Awesome', link: '/icons/fontawesome' }
		]
	},
	{
		label: 'Maps',
		icon: 'bx bx-map',
		subMenu: [
			{ label: 'Google Maps', link: '/maps/google' },
			{ label: 'Vector Maps', link: '/maps/vector' }
		]
	},
	{
		label: 'Multi Level',
		icon: 'bx bx-share-alt',
		subMenu: [
			{ label: 'Level 1.1', link: 'javascript:void(0);' },
			{
				label: 'Level 1.2',
				link: 'javascript:void(0);',
				isChildItem: true,
				childItems: [
					{ label: 'Level 2.1', link: 'javascript:void(0);' },
					{ label: 'Level 2.2', link: 'javascript:void(0);' }
				]
			}
		]
	}
];

const MOCK_DATA = {
	Navdata
};

export default MOCK_DATA;
