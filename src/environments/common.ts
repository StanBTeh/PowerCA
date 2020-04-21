export const common = {
  clientId: 'int.powerbaseaws.amadeus',
  clientId_rms: 'int.agentplatform',
  tokenService: '/service/repo/powerbaseaws/oauth2/token/',
  tokenService_rms: '/service/ap/remarks-manager/oauth2/token',
  locationService: '/service/repo/powerbaseaws/Location/Country?LanguageCode=en-GB',
  travelportService: '/service/repo/powerbaseaws/TravelPorts/Airport?TravelPortCode=',
  supplierCodes: '/service/repo/powerbaseaws/Suppliers?CountryCode=CA',
  airTravelportsService: '/service/repo/powerbaseaws/TravelPorts/Airport',
  cdrItemService: '/service/repo/powerbaseaws/ClientDefinedReferenceItem/',
  cdrItemsByClientAccountService: '/service/repo/powerbaseaws/ClientDefinedReferenceItemsByClientAccountNumber/ClientAccountNumber/',
  cdrItemsByClientSubUnitService: '/service/repo/powerbaseaws/ClientDefinedReferenceItemsByClientSubUnitClientAccount/',
  cdrItemsCreditCardListService: '/service/repo/powerbaseaws/ClientDefinedReferenceItemsCreditCardList/',
  cdrItemListService: '/service/repo/powerbaseaws/ClientDefinedReferenceItemsList/',
  cdrItemValuesService: '/service/repo/powerbaseaws/ClientDefinedReferenceItemValues/',
  cdrItemValuesBySharedValuesGroupIdService: '/service/repo/powerbaseaws/ClientDefinedReferenceItemValuesBySharedValuesGroupId/',
  servicingOptionService: '/service/repo/powerbaseaws/ServiceOptions?ClientSubUnitGuid=',
  feesService: '/service/repo/powerbaseaws/ClientSubUnits/{ClientSubUnitGuid}/ClientFees',
  reasonCodesByClientSubUnitService: '/service/repo/powerbaseaws/ClientSubUnits/{ClientSubUnitGuid}/ReasonCodes',
  reasonCodesService: '/service/repo/powerbaseaws/ReasonCodes',
  reasonCodesByProductIdService: '/service/repo/powerbaseaws/ReasonCodesByProductId/',
  reasonCodesByTypeIdService: '/service/repo/powerbaseaws/ReasonCodesByReasonCodeTypeId/',
  reasonCodesByProductIdAndTypeIdService: '/service/repo/powerbaseaws/ReasonCodes/{ProductId}/{ReasonCodeTypeId}/',
  airMissedSavingThresholdService: '/service/repo/powerbaseaws/Policies/Air/Missed-Savings',
  configurationParameterService: '/service/repo/powerbaseaws/ConfigurationParameter',
  approversService: '/service/repo/powerbaseaws/Approvers?ClientSubUnitGuid=',
  queueMinderItemService: '/service/repo/powerbaseaws/ClientSubUnits/{ClientSubUnitGuid}/QueueMinderItems?QueueMinderTypeIds=',
  queueMinderTypeService: '/service/repo/powerbaseaws/ClientSubUnits/{ClientSubUnitGuid}/QueueMinderTypes?GDSCode=1A',
  ticketQueueService: '/service/repo/powerbaseaws/ClientSubUnits/{ClientSubUnitGuid}/TicketQueues?GDSCode=1A',
  matchedPlacholderValueService: '/service/ap/remarks-manager/api/matched-placeholder-values',
  pnrAmadeusRequestService: '/service/ap/remarks-manager/api/pnr-amadeus-request',
  matrixSupplierService: '/service/repo/powerbaseaws/Matrix/Supplier',
  businessRules: '/service/repo/powerbaseaws/BusinessRules',
  airSupplierCodes: '/service/repo/powerbaseaws/Supplier?SupplierCodes=',
  splunkLog: '/service/cbt-splunk-service/api/splunk/log',
  clearCacheByName: '/service/repo/powerbaseaws/cache/deleteByName?cacheName=',
  LeisureVersionNumber: '20.2.4'
};