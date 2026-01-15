// from data source builder
const DataSource = {
	Master: {
		Products:  "https://api.example.com/products",
		Users:"https://api.example.com/users",
	},
	Transaction: {
		Sales:"https://api.example.com/transactions/sales",
		Purchases: "https://api.example.com/transactions/purchases",
	},
	Report: {
		SalesSummary: "https://api.example.com/reports/sales-summary",
		InventoryStatus: "https://api.example.com/reports/inventory-status",
	},
}

// App parameters

const MenuType = {
	Master: "MasterComponent.js",
	Transaction: "TransactionComponent.js",
	Report: "ReportComponent.js",
}


// UI Builder

const AccsessMenu = [
	{ id: 1, name: "Data product", link: "/product", type: MenuType.Master, data: DataSource.Master.Products},
	{ id: 2, name: "Data user", link: "/user", type: MenuType.Master, data: DataSource.Master.Users},
	{ id: 3, name: "Sales transaction", link: "/sales", type: MenuType.Transaction, data: DataSource.Transaction.Sales},
	{ id: 4, name: "Purchase transaction", link: "/purchase", type: MenuType.Transaction, data: DataSource.Transaction.Purchases},
	{ id: 5, name: "Sales summary report", link: "/report/sales-summary", type: MenuType.Report, data: DataSource.Report.SalesSummary},
	{ id: 6, name: "Inventory status report", link: "/report/inventory-status", type: MenuType.Report, data: DataSource.Report.InventoryStatus},
];


const UI = {
	AccsessMenu,
}