 interface StyleWorkspace {
  wsHeader?: Object;
}

export const Stylesheet = {
    create: function (object: any): any {
      if (!object && typeof object == 'object')
        return Object.create({});
      
      const objKeys = Object.keys(object)
      if (objKeys.length == 0)
        return Object.create({})
      const resultObject: any = Object.create({})
  
      for (let i = 0; i < objKeys.length; i++) {
        Object.defineProperty(resultObject, objKeys[i], {
  
          value: Object.keys(object[objKeys[i]])
            .map((v: string) => `${v}: ${object[objKeys[i]][v]}`).join(';')
         })
      }
      return resultObject;
    }
  }