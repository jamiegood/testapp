/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'TestApp': 'app'
});
//</debug>

requires: [
    'Ext.MessageBox',
    'Ext.data.Store',
    'Ext.plugin.PullRefresh'
]

Ext.application({
    name: 'Sencha',
		requires: [
		    'Ext.MessageBox'
		],
    launch: function() {
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [
                {
                    title: 'Home',
                    iconCls: 'home',
                    cls: 'home',

                    html: [
                        '<img src="http://staging.sencha.com/img/sencha.png" />',
                        '<h1>Welcome to Sencha Touch</h1>',
                        "<p>You're creating the Getting Started app. This demonstrates how ",
                        "to use tabs, lists and forms to create a simple app</p>",
                        '<h2>Sencha Touch 2</h2>'
                    ].join("")
                },
                {
                    xtype: 'nestedlist',
                    title: 'Blog',
                    iconCls: 'star',
                    displayField: 'title',

                    store: {
                        type: 'tree',

                        fields: [
                            'title', 'link', 'author', 'contentSnippet', 'content',
                            {name: 'leaf', defaultValue: true}
                        ],

                        root: {
                            leaf: false
                        },

                        proxy: {
                            type: 'jsonp',
                            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                            reader: {
                                type: 'json',
                                rootProperty: 'responseData.feed.entries'
                            }
                        }
                    },
                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    }
                },
                {
                   title: 'Contact',
                   iconCls: 'user',
                   xtype: 'formpanel',
                   url: 'contact.php',
                   layout: 'vbox',

                   items: [
                       {
                           xtype: 'fieldset',
                           title: 'Contact Us',
                           instructions: '(email address is optional)',
                           items: [
                               {
                                   xtype: 'textfield',
                                   label: 'Name'
                               },
                               {
                                   xtype: 'emailfield',
                                   label: 'Email'
                               },
                               {
                                   xtype: 'textareafield',
                                   label: 'Message'
                               }
                           ]
                       },
                       {
                           xtype: 'button',
                           text: 'Send',
                           ui: 'confirm',
                           handler: function() {
                               this.up('formpanel').submit();
                           }
                       }
                   ]
               },
								{
                  title: 'Contact2',
                  iconCls: 'user',
                  xtype: 'list',
				         //give it an xtype of list for the list component
			            id: 'list',

			//            scrollable: {
			//                indicators: false
			//            },

			            //set the itemtpl to show the fields for the store
			            itemTpl: '{firstName} {lastName}',

			            //enable disclosure icons
			            disclosure: false,

			            //group the list
			            grouped: false,

			            //enable the indexBar
			            indexBar: false,

			            infinite: true,

			            useSimpleItems: true,

			            variableHeights: true,

			            //set the function when a user taps on a disclsoure icon
			            onItemDisclosure: function(record, item, index, e) {
			                //show a messagebox alert which shows the persons firstName
			                e.stopEvent();
			                Ext.Msg.alert('Disclose', 'Disclose more info for ' + record.get('firstName'));
			            },

			            //bind the store to this list
							    store: {
											fields: ['firstName', 'lastName'],
							        data: [
											     { "firstName": "Tommy", "lastName": "Maintz" },
											     { "firstName": "Ed", "lastName": "Spencer" },
											     { "firstName": "Jamie", "lastName": "Avins" },
											     { "firstName": "Aaron", "lastName": "Conran" },
											     { "firstName": "Dave", "lastName": "Kaneda" }
							        ]
							    }
		

              }
            ]
        });
    }
});
	
