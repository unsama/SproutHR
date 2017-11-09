import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import ManualTax from "./../../partials/ManualTax/ManualTax.vue"
import PDFJournal from "./../../partials/PDFJournal/PDFJournal.vue"
import PDFpartner from "./../../partials/PDFpartner/PDFpartner.vue"
import PDFgeneral from "./../../partials/PDFgeneral/PDFgeneral.vue"
import PDFtrial from "./../../partials/PDFtrial/PDFtrial.vue"
import PDFBalanceSheet from "./../../partials/PDFBalanceSheet/PDFBalanceSheet.vue"
import PDFProfitAndLoss from "./../../partials/PDFProfitAndLoss/PDFProfitAndLoss.vue"
import PDFaged from "./../../partials/PDFaged/PDFaged.vue"
import PDF_Financial from "./../../partials/PDF_Financial/PDF_Financial.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'Discuss',
            sidebarData: {
                Dashboard: "/accounting/",
                Sales: [
                    {
                        url: "/accounting/customerinvoice",
                        title: "Customer Invoice"
                    },
                    {
                        url: "/accounting/Payments",
                        title: "Payments"
                    },
                    {
                        url: "/accounting/customer",
                        title: "Customers"
                    },
                    {
                        url: "/accounting/accountsaleableproduct",
                        title: "Sellable Products"
                    },


                ],
                Purchases:[
                    {
                        url: "/accounting/vendorbills",
                        title: "Vendor Bills"
                    },
                    {
                        url: "/accounting/purchasespayment",
                        title: "Payments"
                    },
                    {
                        url: "/accounting/vendors",
                        title: "Vendors"
                    },
                    {
                        url: "/accounting/purchaseableproducts",
                        title: "Purchaseable Products"
                    }
                ],
                Advisor:[
                    {
                        url: "/accounting/journalentry",
                        title: "Journal Entries"
                    },
                    {
                        url: "/accounting/coa",
                        title: "Chart of Accounts"
                    },
                    {
                        url: "/accounting/manualpayment",
                        title: "Manual Payments & Invoices"
                    },
                    {
                        modal: {
                            data_target: ".bd-example-modal-lg"
                        },
                        url: false,
                        title: "Make Manual Tax Adjustments"
                    }
                ],

                Reports:[
                    {
                        url: false,
                        title: "Business Intelligence",
                        childrens:[
                            {
                                url: "/accounting/invoice",
                                title: "Invoice"
                            }
                        ]
                    },
                    {
                        url: false,
                        title: "PDF Reports",
                        childrens:[
                            {
                                modal:{
                                    data_target: ".bd-example-modal-lg1"
                                },
                                url: false,
                                title: "Sales/Purchase Journal"
                            },
                            {
                                modal:{
                                    data_target: ".bd-example-modal-lg2"
                                },
                                title: "Partner"
                            },
                            {
                                modal:{
                                    data_target: ".bd-example-modal-lg3"
                                },
                                title: "General Ledger"
                            },
                            {
                                modal:{
                                    data_target: ".bd-example-modal-lg4"
                                },
                                title: "Trial Balance"
                            },
                            {
                                modal:{
                                    data_target: ".bd-example-modal-lg5"
                                },
                                title: "Balance Sheet"
                            },
                            {
                                modal:{
                                    data_target: ".bd-example-modal-lg6"
                                },
                                title: "Profit and Loss"
                            },

                            {
                                modal:{
                                    data_target: ".bd-example-modal-lg7"
                                },
                                title: "Aged Partner Balance"
                            },
                            {
                                modal:{
                                    data_target: ".bd-example-modal-lg8"
                                },
                                title: "Financial Report"
                            }
                        ]
                    },

                ],

                Configuration:[
                    {
                        url: "/accounting/accountingsettings",
                        title: "Settings"
                    },
                    {
                        url: false,
                        title: "Accountings",
                        childrens:[
                            {
                                url: "/accounting/ConfigTaxes",
                                title: "Taxes"
                            },
                            {
                                url: "/accounting/Configfiscal",
                                title: "Fiscal Position"
                            },
                            {
                                url: "/accounting/Configbank",
                                title: "Bank Accounts"
                            },
                            {
                                url: "/accounting/Configjournal",
                                title: "Journals"
                            },
                        ]
                    },
                    {
                        url: false,
                        title: "Management",
                        childrens:[
                            {
                                url: "/accounting/Configmanagement",
                                title: "Payment terms"
                            }
                        ]
                    },

                    {
                        url: false,
                        title: "Multi-Currencies",
                        childrens:[
                            {
                                url: "/accounting/accountingcurrency",
                                title: "Currencies"
                            }
                        ]
                    },
                    {
                        url: false,
                        title: "Financial Reports",
                        childrens:[
                            {
                                url: "/accounting/accountreport",
                                title: "Account Report"
                            },
                            {
                                url: "/accounting/AccountHierarchy",
                                title: "Account Reports Hierarchy"
                            },
                        ]
                    },

                    {
                        url: false,
                        title: "Payments",
                        childrens:[
                            {
                                url: "/accounting/paymentAcquirers",
                                title: "Payment Acquirers"
                            },
                            {
                                url: "/accounting/paymenttransactions",
                                title: "Payment Transactions"
                            }
                        ]
                    },

                ],
            }
        }
    },
    components: {
        Sidebar,
        Dashboardsetting,
        Topcontroller,
        ManualTax,
        PDFJournal,
        PDFpartner,
        PDFgeneral,
        PDFtrial,
        PDFBalanceSheet,
        PDFProfitAndLoss,
        PDFaged,
        PDF_Financial


    }

}