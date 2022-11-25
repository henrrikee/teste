package avaliacao.com.financialtransfer;

import avaliacao.com.entity.FinancialTransfer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/financial_transfer")
public class FinancialTransferController {


    @Autowired
    private FinancialTransferService financialTransferService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public FinancialTransfer save(@RequestBody FinancialTransfer financialTransfer) {
        return financialTransferService.save(financialTransfer);
    }

    @GetMapping
    public ResponseEntity<List<FinancialTransfer>> findAll() {
        List<FinancialTransfer> financialTransfers;
        financialTransfers = financialTransferService.findAll();
        return new ResponseEntity<>(financialTransfers, HttpStatus.OK);
    }

}
