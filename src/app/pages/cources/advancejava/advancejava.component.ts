import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-advancejava',
  templateUrl: './advancejava.component.html',
  styleUrls: ['./advancejava.component.css'],
  animations: [
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', [animate(500)])
    ])
  ]
})
export class AdvancejavaComponent {
  panelOpenState = false;
  isOpen = false;
  isOpenpea = false;
  isOpenif = false;
  isOpenwad = false;
  isOpenajf = false;
  isOpendf = false;
  isOpendp = false;
  isOpendpi = false;
  isOpenIntroductiontoJDBC = false;
  isOpenJDBCArchitecture = false;
  isOpenTypesofJDBCDrivers  = false;
  isOpenStepstoConnecttoaDatabaseUsingJDBC = false;
  isOpenJDBCStatements = false;
  isOpenTransactionsinJDBC = false;
  isOpenBatchProcessinginJDBC = false;
  isOpenJDBCErrorHandling = false;
  isOpenJDBCDataTypes = false;
  isOpenConnectionPooling = false;
  isOpenJDBCwithORMObjectRelationalMapping = false;
  isOpenJDBCBestPractices = false;
  isOpenAdvancedJDBCFeatures = false;
  isOpenJDBCandPerformanceConsiderations = false;
  isOpenHandlingHTTPRequestsandResponses = false;
  toggleibl() {this.isOpen = !this.isOpen;}
  togglepea() {this.isOpenpea = !this.isOpenpea;}
  toggleif() {this.isOpenif = !this.isOpenif;}
  togglewad() {this.isOpenwad = !this.isOpenwad;}
  toggleajf() {this.isOpenajf = !this.isOpenajf;}
  toggledf() {this.isOpendf = !this.isOpendf;}
  toggledp() {this.isOpendp = !this.isOpendp;}
  toggledpi() {this.isOpendpi = !this.isOpendpi;}
  IntroductiontoJDBC() {this.isOpenIntroductiontoJDBC = !this.isOpenIntroductiontoJDBC}
  JDBCArchitecture() {this.isOpenJDBCArchitecture = !this.isOpenJDBCArchitecture}
  TypesofJDBCDrivers() {this.isOpenTypesofJDBCDrivers = !this.isOpenTypesofJDBCDrivers}
  StepstoConnecttoaDatabaseUsingJDBC() {this.isOpenStepstoConnecttoaDatabaseUsingJDBC = !this.isOpenStepstoConnecttoaDatabaseUsingJDBC}
  JDBCStatements(){this.isOpenJDBCStatements = !this.isOpenJDBCStatements}
  TransactionsinJDBC(){this.isOpenTransactionsinJDBC = !this.isOpenTransactionsinJDBC}
  BatchProcessinginJDBC(){this.isOpenBatchProcessinginJDBC = !this.isOpenBatchProcessinginJDBC}
  JDBCErrorHandling(){this.isOpenJDBCErrorHandling = !this.isOpenJDBCErrorHandling}
  JDBCDataTypes(){this.isOpenJDBCDataTypes = !this.isOpenJDBCDataTypes}
  ConnectionPooling(){this.isOpenConnectionPooling = !this.isOpenConnectionPooling}
  JDBCwithORMObjectRelationalMapping(){this.isOpenJDBCwithORMObjectRelationalMapping = !this.isOpenJDBCwithORMObjectRelationalMapping}
  JDBCBestPractices(){this.isOpenJDBCBestPractices = !this.isOpenJDBCBestPractices}
  AdvancedJDBCFeatures(){this.isOpenAdvancedJDBCFeatures = !this.isOpenAdvancedJDBCFeatures}
  JDBCandPerformanceConsiderations(){this.isOpenJDBCandPerformanceConsiderations = !this.isOpenJDBCandPerformanceConsiderations}
  HandlingHTTPRequestsandResponses() {this.isOpenHandlingHTTPRequestsandResponses = !this.isOpenHandlingHTTPRequestsandResponses}
  expandAll() {
   this.IntroductiontoJDBC();
   this.JDBCArchitecture();
   this.TypesofJDBCDrivers();
   this.StepstoConnecttoaDatabaseUsingJDBC();
   this.JDBCStatements();
   this.TransactionsinJDBC();
   this.BatchProcessinginJDBC();
   this.JDBCErrorHandling();
   this.JDBCDataTypes();
   this.ConnectionPooling();
   this.JDBCwithORMObjectRelationalMapping();
   this.JDBCBestPractices();
   this.AdvancedJDBCFeatures();
   this.JDBCandPerformanceConsiderations();
  }
  imageObject = [{
    image: 'assets/img/newAjava.PNG',
    thumbImage: 'assets/img/newAjava.PNG',
    title: 'JEE Framework: Advanced Java covers Java Enterprise Edition (JEE) which includes technologies like Servlets, JSP, and EJB. These are crucial for developing large-scale, distributed, and enterprise-level applications.'
  }, {
    image: 'assets/img/Jdbc.PNG',
    thumbImage: 'assets/img/Jdbc.PNG',
    title: 'JDBC: Java Database Connectivity (JDBC) is an integral part of Advanced Java. It is essential for interacting with databases and managing data effectively in a Java application.'
  }, {
    image: 'assets/img/servlet.PNG',
    thumbImage: 'assets/img/servlet.PNG',
    title: 'Sevlet most important for spring boot.'
  }, {
    image: 'assets/img/jsp.PNG',
    thumbImage: 'assets/img/jsp.PNG',
    title: 'Java Server Pages'
  }, {
    image: 'assets/img/ejb.PNG',
    thumbImage: 'assets/img/ejb.PNG',
    title: 'Enterprise Java Beans'
  }, {
    image: 'assets/img/swing.PNG',
    thumbImage: 'assets/img/swing.PNG',
    title: 'Java swing'
  }];

}
