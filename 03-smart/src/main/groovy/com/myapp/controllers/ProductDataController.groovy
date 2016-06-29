package com.myapp.controllers

import com.myapp.dao.GenericDao
import com.myapp.model.Product
import org.apache.log4j.Logger
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/data/admin/product")
class ProductDataController {

    final Logger log = Logger.getLogger(this.class)

    final static Map OK_MESSAGE = [ message: 'ok' ]

    @Autowired
    GenericDao dao

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody List<Product> products() {
        dao.query('from Product p')
    }

    @RequestMapping(value="{id}", method = RequestMethod.GET)
    @ResponseBody Product product(@PathVariable('id') Long id) {
        dao.find(Product.class, id)
    }

    @RequestMapping(method = [ RequestMethod.POST ] )
    @ResponseBody Map save(@RequestBody Product product) {

        dao.save(product)

        OK_MESSAGE
    }

    @RequestMapping(value="{id}", method = [ RequestMethod.PUT] )
    @ResponseBody Map update(@PathVariable('id') Long id, @RequestBody Product product) {

        dao.merge(product)

        OK_MESSAGE
    }


    @RequestMapping(value="{id}", method = RequestMethod.DELETE)
    @ResponseBody Map delete(@PathVariable('id') Long id,@RequestBody Product product) {

        dao.remove(product)

        OK_MESSAGE
    }


}
