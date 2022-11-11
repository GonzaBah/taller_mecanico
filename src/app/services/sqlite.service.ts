import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject,Observable } from 'rxjs';

import { Usuario } from './usuario';
@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  public database: SQLiteObject;
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  //String con la creación de tablas
  tablaRol: string = "create table if not exists rol(idrol Integer Primary Key autoincrement, nombreRol VARCHAR(20) NOT NULL);";
  tablaUser: string = "create table if not exists usuario(idusuario Integer Primary Key autoincrement, rut VARCHAR(10) NOT NULL, correo VARCHAR(40) NOT NULL, clave VARCHAR(50) NOT NULL, id_rol Integer, foreign key(id_rol) references rol(idrol));";
  //String para pobrar tablas
  RolCliente: string = "insert or ignore into rol(nombreRol) values('Clienate');";
  RolFunc: string = "insert or ignore into rol(nombreRol) values('Funcionario');";

  listUser = new BehaviorSubject([]);
  constructor(public sql: SQLite, private platform: Platform) {
    this.platform.ready().then(() => {
      this.crearDB();
    }).catch(e => console.log("equisde no funciono la wea *quema todo*"))

  }
  fetchUsers(): Observable<Usuario[]> {
    return this.listUser.asObservable();
  }


  dbState() {
    return this.isDBReady.asObservable();
  }



  crearDB(){
      this.sql.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) =>{
        this.database = db;
        this.tablasDB();
        console.log("Listo!!");
      }).catch(e => console.log(e));
  }

  async tablasDB(){
    try{
      await this.database.executeSql(this.tablaRol, []);
      await this.database.executeSql(this.tablaUser, [])
      await this.database.executeSql(this.RolCliente, []);
      await this.database.executeSql(this.RolFunc, []);
      await this.database.executeSql("insert or ignore into usuario(correo,clave,rut,id_rol) values(?,?,?,?);", ['juan@repair.car.cl','alvocampeon123','1090709-5',1]);

      await this.database.executeSql("insert or ignore into usuario(correo,clave,rut,id_rol) values(?,?,?,?);", ['chunchomoe@gmail.com','soychuncho','1090729-5',2]);

      this.database.executeSql("select * from rol;", []).then((data)=>{
        for (let i=0; i < data.rows.length; i++){
          let item: string = data.rows.item(i);
          console.log("valor rol "+i+": "+item.valueOf)
        }
      });
      this.searchUsers();
      this.isDBReady.next(true);
    } catch (e) {
      console.log(e);
    }
  }

  searchUsers() {
    return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_usuario: res.rows.item(i).id_usuario,
            rut: res.rows.item(i).rut,
            clave: res.rows.item(i).clave,
            correo: res.rows.item(i).correo,
            rol_id: res.rows.item(i).id_rol
          })
        }
      }
      this.listUser.next(items);
    })
  }


}
